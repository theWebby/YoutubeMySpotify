require('./run-client-server')

const { app, BrowserWindow } = require('electron')

const path = require('path')
const os = require('os')

function createWindow() {
  // Create the browser window.
  BrowserWindow.addExtension('C:/Users/James/AppData/Local/Google/Chrome/User Data/Default/Extensions/blpcfgokakmgnkcojhhkbfbldkacnbeo/4.2.8_0');

  let win = new BrowserWindow({
    webPreferences: {
      nodeIntegration: true
    },
    // backgroundColor: '#000'
  })

  win.setPosition(2300, 300);
  // win.setFullScreen(true);
  win.setAlwaysOnTop(true);
  win.setAlwaysOnTop(false);
  win.removeMenu()
  win.loadURL('http://localhost:80/login')
  win.webContents.openDevTools() //remove for prod
}

app.whenReady().then(createWindow)