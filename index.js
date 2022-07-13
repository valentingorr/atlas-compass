const {
	app,
	BrowserWindow
} = require("electron");

const path = require("path");

const isDev = !app.isPackaged;

if (require("electron-squirrel-startup")) app.quit();

let mainWindow;
const createWindow = () => {
	mainWindow = new BrowserWindow({
		width: 800,
		height: 600,
		webPreferences: {
			nodeIntegration: false,
			worldSafeExecuteJavaScript: true,
			contextIsolation: true,
			preload: path.join(__dirname, "src/preload.js")
		}
	});

	mainWindow.loadFile(path.resolve(__dirname, "./public/index.html"));
	mainWindow.webContents.openDevTools();
};

app.on("ready", createWindow);

app.on("window-all-closed", () => {
	if (process.platform !== "darwin") app.quit();
});

app.on("activate", () => {
	if (BrowserWindow.getAllWindows().length === 0) createWindow();
});

if(isDev) require("electron-reload")(__dirname, {
	electron: path.join(__dirname, "node_modules", ".bin", "electron")
});