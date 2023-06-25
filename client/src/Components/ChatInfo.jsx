import React, { useContext } from 'react'
import { ChatContext } from '../Context/chatContext';

const ChatInfo = () => {
    const img = false;
    const avatarColors = ["blue", "yellow", "green", "pink", "orange", "purple"]
    const { selectedChat } = useContext(ChatContext)
    const userIdBase10 = parseInt(selectedChat, 16)
    const colorIndex = userIdBase10 % avatarColors.length
    const avatarColor = avatarColors[colorIndex]
    return (
        selectedChat && <div className="chatInfo">
            <div className="user d-flex">
                {img ? <img src="https://cdn5.vectorstock.com/i/1000x1000/92/89/hipster-avatar-image-vector-19639289.jpg" alt="" /> : <div className={`${avatarColor}`}>{selectedChat[1][0]}</div>}
                <span>{selectedChat[1]}</span>
            </div>
            <div className="chatIcons">
                <button>
                    <i className="fa-solid fa-ellipsis fa-rotate-90"></i>
                </button>
            </div>
        </div>
    )
}

export default ChatInfo