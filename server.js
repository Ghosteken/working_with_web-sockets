

const express = require('express')
const { Socket } = require('socket.io')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => {
    
    console.log(`Example app listening on port ${port}!`)
})
const io = require('socket.io')(port)
io.on('connections', (socket) => {
    console.log(socket.id);
    socket.on('disconnect', () => {
        console.log('user disconnected');
    });
    socket.on('chat message', (msg) => {
        console.log('message:'+ msg);
        io.emit('chat message', msg);
    });
});


//install the client ver on the client