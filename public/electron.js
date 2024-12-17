const { app, BrowserWindow } = require("electron");
const path = require("path");

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1280,
    height: 720,
    fullscreen: true, // เปิดแบบเต็มจอเหมาะกับ Kiosk
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    },
  });

  // โหลดไฟล์ index.html ที่ Build จาก React
  mainWindow.loadFile(path.join(__dirname, "build/index.html"));

  mainWindow.on("closed", () => {
    mainWindow = null;
  });
}

app.whenReady().then(createWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});

app.on("activate", () => {
  if (mainWindow === null) createWindow();
});
