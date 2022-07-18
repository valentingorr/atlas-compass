const {
	contextBridge,
	ipcRenderer
} = require("electron");

contextBridge.exposeInMainWorld("bridge", {
	api: {
		on: (event, callback) => ipcRenderer.on(event, callback),
		send: (event, data) => ipcRenderer.send(event, data),
		invoke: (event, data) => ipcRenderer.invoke(event, data)
	}
});