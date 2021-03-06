'use strict';

var electron = require('electron');
var app = electron.app;
var BrowserWindow = electron.BrowserWindow;

var mainWindow = null;

app.on('window-all-closed', function() {
	if (process.platform != 'darwin')
		app.quit();
});

app.on('ready', function() {
	//Khởi chạy trình duyệt (Chromium), load màn hình ban đầu
	mainWindow = new BrowserWindow({width: 800, height: 600});
	mainWindow.loadURL('file://' + __dirname + '/index.html');
	//mainWindow.setMenu(null);

	mainWindow.on('closed', function() {
		mainWindow = null;
	});
});
