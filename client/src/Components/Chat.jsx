import React, { useContext } from "react";
import ChatInfo from "./ChatInfo";
import Messages from "./Messages";
import Input from "./Input";
import { ChatContext } from '../Context/chatContext'

const Chat = () => {
    const { selectedChat } = useContext(ChatContext)
    return (
        <div className="chat">
            <ChatInfo />
            {selectedChat ? <Messages /> :
                <div className='d-flex justify-content-center align-items-center h-100'>
                    <p className='text-light px-3 py-1 rounded-pill user-select-none' style={{ background: "#1e2c3a" }}>Select a chat to start messaging</p>
                </div>}
            {selectedChat && <Input />}
        </div>
    );
};

export default Chat;