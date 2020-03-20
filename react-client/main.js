require('./server.js')

const { app, BrowserWindow, session } = require('electron')
const { deleteCookies, adBlocker, clearCookiesHook } = require('./electronHelpers')

async function createWindow () {
  // await deleteCookies(); 

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


  // const myFilters = ['doubleclick', 'pagead', 'js/bg', 'annotations_invideo', 'get_midroll_info', 'ptracking']
  // session.defaultSession.webRequest.onBeforeRequest((details, callback) => {
  //   console.log('adBlocker');

  //   let shouldBlock = myFilters.some(myFilter => {
  //     return details.url.includes(myFilter);
  //   })
    
  //   if (shouldBlock){
  //     return
  //   }

  //   callback({ requestHeaders: details.requestHeaders })
  // })


  session.defaultSession.webRequest.onBeforeRequest((details, callback) => {
    const blockedAd = adBlocker(details.url);
    if(blockedAd){
      return;
    }

    clearCookiesHook(details.url);

    callback({ requestHeaders: details.requestHeaders })
  });
}

app.whenReady().then(createWindow)