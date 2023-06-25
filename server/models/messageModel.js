const mongoose = require('mongoose');

const messageModel = new mongoose.Schema({
    sender: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    recipient: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    text:String,   
},{timestamps:true})

const Message = mongoose.model('Message', messageModel);

module.exports = Message