'use strict';
const app = require('app');
const BrowserWindow = require('browser-window');
const beacon = require('eddystone-beacon');
const path = require('path');

// report crashes to the Electron project
require('crash-reporter').start();

// adds debug features like hotkeys for triggering dev tools and reload
require('electron-debug')();

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
		width: 1200,
		height: 700,
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
	mainWindow = createMainWindow();

	beacon.advertiseUrl('http://naver.com');
});

app.on('menuitem-click', e => {
	BrowserWindow.getFocusedWindow().webContents.send(e.event);
});
