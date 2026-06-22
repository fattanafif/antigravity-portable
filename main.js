const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow() {
  const win = new BrowserWindow({
    width: 1280,
    height: 800,
    backgroundColor: '#0d0d0d',
    title: 'Antigravity 2.0 Portable',
    webPreferences: {
      preload: path.join(__dirname, 'resources', 'app', 'preload.js'),
      contextIsolation: true,
      nodeIntegration: false
    }
  });
  win.loadFile(path.join(__dirname, 'resources', 'app', 'index.html'));
}

app.whenReady().then(createWindow);
