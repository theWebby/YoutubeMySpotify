require('./run-client-server')

const { app, BrowserWindow } = require('electron')

const path = require('path')
const os = require('os')

function createWindow() {
  // Create the browser window.
  BrowserWindow.addExtension('./Extensions/cjpalhdlnbpafiamejdnhcphjbkeiagm/1.24.4_0');

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
  win.loadURL('http://localhost:3000/login')
  win.webContents.openDevTools() //remove for prod
}

app.whenReady().then(createWindow)