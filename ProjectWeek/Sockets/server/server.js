const express = require('express');
const app = express();
require('./config/mongoose.config');
const server = app.listen(8000, () => console.log('Now listening on port 8000'));

const io = require('socket.io')(server, { cors: true });

const ChatRoom = require('./models/chatroom.model');
io.on('connection', socket => {
    // in here, we will be creating our event listners/handlers
    console.log(`${socket.id} - connection opened`);

    socket.on('sendMessage', data => {
        const { userName, chatRoom, message } = data;
        ChatRoom.findOneAndUpdate({ chatRoom }, { $push: { messageLog: { userName, message } } }, { new: true })
            .then(chatLog => {
                io.to(chatRoom).emit('messageReceived', chatLog);
            })
            .catch(err => console.log(err));
    })

    socket.on('joinRoom', data => {
        ChatRoom.findOne({ chatRoom: data })
            .then(chatRoom => {
                if(chatRoom === null) {
                    return ChatRoom.create({chatRoom: data})
                } else {
                    socket.join(data);
                    socket.emit('roomJoined', chatRoom);
                }
            })
            .then(chatRoom => {
                if(chatRoom !== undefined){
                    console.log(chatRoom);
                    socket.join(data);
                    socket.emit('roomJoined', chatRoom);
                }
            })
            .catch(err => console.log(err));
    })


    socket.on('disconnect', () => {
        console.log(`${socket.id} - connection closed`);
    })
})