const { ipcRenderer } = require('electron');

const editor = document.getElementById('editor');

// Example: Listen for messages from main process
ipcRenderer.on('message-from-main', (event, data) => {
    console.log('Received message from main process:', data);
});

// Example: Send message to main process
function sendMessageToMain() {
    ipcRenderer.send('message-to-main', 'Hello from renderer process!');
}
