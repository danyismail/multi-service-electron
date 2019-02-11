const { app , BrowserWindow} = require('electron')

function createWindow(){
    let mainWindow = new BrowserWindow({
        width: 600,
        height:600,
        webPreferences:{
            nodeIntegration:true
        }
    })
    mainWindow.loadFile('axios.html')
    mainWindow.webContents.openDevTools()
}

app.on('ready',createWindow)