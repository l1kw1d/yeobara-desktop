'use strict';
const app = require('app');
const BrowserWindow = require('browser-window');
const beacon = require('eddystone-beacon');
const path = require('path');
const ipc = require('ipc');

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
	// load .env to process.env
	require('dotenv').load();

	// create main window
	mainWindow = createMainWindow();
});

app.on('menuitem-click', e => {
	BrowserWindow.getFocusedWindow().webContents.send(e.event);
});

ipc.on('env', function (e) {
	BrowserWindow.getFocusedWindow().webContents.send('env', process.env);
});

ipc.on('meetup', function (e, args) {
	console.log('start broadcasting http://' + args.meetup);
	beacon.advertiseUrl('http://' + args.meetup);
	e.returnValue = 'http://' + args.meetup;
});
