const {app, BrowserWindow} = require('electron')
const url = require('url')
const path = require('path')

let mainWindow = null;

app.on('window-all-closed', function() {
	if (process.platform != 'darwin')
		app.quit();
});

function createWindow() {
  mainWindow  = new BrowserWindow({width: 800, height: 600})
  mainWindow .loadURL(url.format ({
      pathname: path.join(__dirname, 'index.html'),
      protocol: 'file:',
      slashes: true
   }))

   mainWindow .on('closed', function() {
    mainWindow  = null;
  });
}

app.on('ready', createWindow)