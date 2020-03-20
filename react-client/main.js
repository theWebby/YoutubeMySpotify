require('./server.js')

const { app, BrowserWindow } = require('electron')
const { deleteCookies, runAdBlocker } = require('./electronHelpers')

async function createWindow () {
  await deleteCookies(); 

  // Create the browser window.
  let win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  })
  win.webContents.openDevTools()

  // and load the index.html of the app.
  win.loadURL('http://localhost:3000/')


  
}

app.whenReady().then(createWindow)