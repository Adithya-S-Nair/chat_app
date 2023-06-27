import React, { useContext } from 'react'
import { UserContext } from '../Context/userContext'
import { ChatContext } from '../Context/chatContext'

const Message = ({ isOur, content, avatarColor }) => {
    const { user } = useContext(UserContext)
    const { selectedChat } = useContext(ChatContext)
    const img = false
    return (
        <div className="messages">
            {isOur === true ? <div className="message owner">
                <div className="messageInfo">
                    {img ? <img
                        src=""
                        alt=""
                    /> :
                        <div className='img'>{user.username[0]}</div>}
                </div>
                <div className="messageContent">
                    <p className='mb-0'>{content}<span>just now</span></p>
                    {/* {message.img && <img src="{message.img}" alt="" />} */}
                </div>
            </div> :
                <div className="message">
                    <div className="messageInfo">
                        {img ? <img
                            src=""
                            alt=""
                        /> :
                            <div className={'img ' + avatarColor}>{selectedChat[1][0]}</div>}
                    </div>
                    <div className="messageContent">
                        <p className='mb-0'>{content}<span>just now</span></p>
                        {/* {message.img && <img src="{message.img}" alt="" />} */}
                    </div>
                </div>}
        </div>
    )
}

export default Message