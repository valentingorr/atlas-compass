const {
	app,
	BrowserWindow
} = require("electron");

const path = require("path");

if(require("electron-squirrel-startup")) app.quit();

let mainWindow;
const createWindow = () => {
	mainWindow = new BrowserWindow({
		width: 800,
		height: 600,
		webPreferences: {
			nodeIntegration: false,
			worldSafeExecuteJavaScript: true,
			contextIsolation: true,
			preload: path.join(__dirname, "./src/preload.js")
		}
	});
	mainWindow.loadFile(path.join(__dirname, "./public/index.html"));
	mainWindow.openDevTools();
};

app.on("ready", createWindow);
app.on("will-quit", () => globalShortcut.unregisterAll());
app.on("window-all-closed", () => process.platform !== "darwin" ? app.quit() : null);
app.on("activate", () => BrowserWindow.getAllWindows().length === 0 ? createWindow() : null);

if(!app.isPackaged) require("electron-reload")(__dirname, {
	electron: path.join(__dirname, "node_modules", ".bin", "electron"),
	ignored: [
		path.resolve(__dirname, "./index.js"),
		path.resolve(__dirname, "./node_modules/"),
		path.resolve(__dirname, "./packages/"),
		path.resolve(__dirname, "./modules/")
	]
});