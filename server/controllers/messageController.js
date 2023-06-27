const Message = require('../models/messageModel')

const fetchAllMessages = async (req, res) => {
    const { userId } = req.params
    const ourUserId = req.userId
    const messages = await Message.find({
        sender: { $in: [userId, ourUserId] },
        recipient: { $in: [userId, ourUserId] }
    })
    res.json(messages)
}

module.exports = {
    fetchAllMessages
};