// Youtube only lets videos be played on localhost or youtube. So this electron app is a server and a browser running on localhost:8000


const { app, BrowserWindow } = require('electron')

function createWindow () {
  // Create the browser window.
  let win = new BrowserWindow({
    webPreferences: {
      nodeIntegration: true
    },
    // backgroundColor: '#000'
  })
  win.setPosition(2300, 300);
  win.setFullScreen(true);
  win.setAlwaysOnTop(true);
  win.setAlwaysOnTop(false);
  // win.removeMenu()
  win.loadURL('http://localhost:3000')
  win.webContents.openDevTools()
}

app.whenReady().then(createWindow)