import React, { useContext } from "react";
import ChatInfo from "./ChatInfo";
import Messages from "./Messages";
import Input from "./Input";
import { ChatContext } from '../Context/chatContext'

const Chat = () => {
    const { selectedChat } = useContext(ChatContext)
    const avatarColors = ["blue", "yellow", "green", "pink", "orange", "purple"]
    const userIdBase10 = parseInt(selectedChat, 16)
    const colorIndex = userIdBase10 % avatarColors.length
    const avatarColor = avatarColors[colorIndex]
    return (
        <div className="chat">
            <ChatInfo avatarColor={avatarColor} />
            {selectedChat ? <Messages avatarColor={avatarColor} /> :
                <div className='d-flex justify-content-center align-items-center h-100'>
                    <p className='text-light px-3 py-1 rounded-pill user-select-none' style={{ background: "#1e2c3a" }}>Select a chat to start messaging</p>
                </div>}
            {selectedChat && <Input />}
        </div>
    );
};

export default Chat;