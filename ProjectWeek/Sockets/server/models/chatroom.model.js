const mongoose = require('mongoose');

const MessageSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    }
}, { timestamps: true })

const ChatRoomSchema = new mongoose.Schema({
    chatRoom: {
        type: String,
        required: [true, "Enter a room name."]
    },
    messageLog: [MessageSchema]
}, { timestamps: true})

const ChatRoom = mongoose.model("ChatRoom", ChatRoomSchema)

module.exports = ChatRoom;