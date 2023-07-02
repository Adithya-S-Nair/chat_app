import React, { useContext } from 'react'
import { ChatContext } from '../Context/chatContext';

const Contacts = ({ avatarColor, userId, username, online }) => {
    const img = false
    const { selectedChat, setSelectedChat } = useContext(ChatContext);

    return (
        <div
            onClick={() => setSelectedChat([userId, username])}
            className={`userChat container px-3 ${userId === (selectedChat && selectedChat[0]) ? 'active' : ''}`}
            key={userId}
        >
            {img ? (
                <img src="https://static.vecteezy.com/system/resources/thumbnails/009/313/954/small/default-avatar-profile-in-flat-design-free-png.png" alt="" />
            ) : (
                <div className="position-relative">
                    <div className={`img ${avatarColor}`}>{username[0]}</div>
                    {online ?
                        <div className="position-absolute p-2 bg-success rounded-circle shadow-2" style={{ bottom: '0.01em', right: '0.05em' }}></div>
                        : <div className="position-absolute p-2 bg-secondary rounded-circle shadow-2" style={{ bottom: '0.01em', right: '0.05em' }}></div>}
                </div>
            )}
            <div className="userChatInfo user-select-none">
                <span>{username}</span>
                <p>latest msg</p>
            </div>
        </div>
    )
}

export default Contacts