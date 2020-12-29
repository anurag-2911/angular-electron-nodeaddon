const testAddon = require('testaddon');
const {app, BrowserWindow} = require('electron');
const url = require("url");
const path = require("path");
const { ipcMain } = require('electron');



let mainWindow;

function createWindow () {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  })

  mainWindow.loadURL(
    url.format({
      pathname: path.join(__dirname, '/dist/angularapp/index.html'),
      protocol: "file:",
      slashes: true
    })
  );
  // Open the DevTools.
//   mainWindow.webContents.openDevTools()

  mainWindow.on('closed', function () {
    mainWindow = null
  });

}

app.on('ready', createWindow);

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
});

app.on('activate', function () {
  if (mainWindow === null) {
    createWindow();

  }
});
// Main process
ipcMain.handle('hellomsg', async (event, msg) => {
  console.log('in main process getting msg from renderer: ' + msg);
  const result = await getHelloMsg(msg);
  console.log('returning result' + result);
  return result
})

function getHelloMsg(msg) {
console.log(msg);
var result= testAddon.hello();
return result;
}


module.exports = testAddon;
