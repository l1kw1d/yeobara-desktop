'use strict';
const app = require('app');
const BrowserWindow = require('browser-window');
const beacon = require('eddystone-beacon');
const path = require('path');
const ipc = require('ipc');
const gcm = require('./gcm');

// report crashes to the Electron project
require('crash-reporter').start();

// adds debug features like hotkeys for triggering dev tools and reload
require('electron-debug')({
	showDevTools: process.env.DEBUG !== undefined
});

// menu loader
require('electron-menu-loader')(path.join(__dirname, 'menu'),
	['defaults', 'help'], {
		appMenu: true
});

// prevent window being garbage collected
let mainWindow;

function onClosed() {
	// dereference the window
	// for multiple windows store them in an array
	mainWindow = null;
}

function createMainWindow() {
	const win = new BrowserWindow({
		width: 1600,
		height: 800,
		'web-preferences': {
			'preload': path.join(__dirname, 'browser-ipc.js')
		}
	});

	win.loadUrl(`file://${__dirname}/../app/index.html`);
	win.on('closed', onClosed);

	return win;
}

app.on('window-all-closed', () => {
	if (process.platform !== 'darwin') {
		app.quit();
	}
});

app.on('activate-with-no-open-windows', () => {
	if (!mainWindow) {
		mainWindow = createMainWindow();
	}
});

app.on('ready', () => {
	require('dotenv').load({
		path: path.resolve(__dirname, '../../env')
	});

	if (!process.env.FB_APIKEY || !process.env.FB_APPNAME || !process.env.GCM_KEY) {
		const dialog = require('dialog');

		dialog.showMessageBox({
			type: 'none',
			message: 'No env file. Check readme file for configuration',
			buttons: ['ok']
		});

		app.quit();
	}
	// create main window
	mainWindow = createMainWindow();
});

app.on('menuitem-click', e => {
	if (e.event === 'meetup') {
		beacon.stop();
	}

	BrowserWindow.getFocusedWindow().webContents.send(e.event);
});

ipc.on('env', function (e) {
	BrowserWindow.getFocusedWindow().webContents.send('env', process.env);
});

ipc.on('advertising', function (e, args) {
	var url = 'http://yeobara.com/' + args.hashcode;
	beacon.advertiseUrl(url);
	e.returnValue = url;

	console.log('start broadcasting ' + url);
});

ipc.on('gcm', function (e, args) {
	gcm.send(args, function (err, result) {
		if (err) {
			console.log('GCM notification has been failed', err, result, args);
		}
	});
});
