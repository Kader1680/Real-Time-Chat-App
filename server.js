// create server socket

const io = require("socket.io")(8000)

io.on('connection', socket => {
    socket.emit('chat-message', 'Hello World')
})