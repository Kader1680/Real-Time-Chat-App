const socket = io('/chat');
// Listen for messages from the server
socket.on('message', (message) => {
    // Add the message to the chat messages container
    const chatMessagesContainer = document.querySelector('#chat-messages');
    chatMessagesContainer.innerHTML += `<p>${message}</p>`;
  });
  // Send a message to the server
  const sendMessageButton = document.querySelector('#send-message');
  sendMessageButton.addEventListener('click', () => {
    const message = document.querySelector('#message').value;
    socket.emit('message', message);
  });