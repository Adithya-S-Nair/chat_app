import React, { useContext } from 'react'
import { MessageContext } from '../Context/messageContext'

const Message = ({ isOur, content }) => {
    const { messages } = useContext(MessageContext)
    console.log(isOur);
    console.log(content);
    return (
        <div className="messages">
            {isOur === true ? <div className="message owner">
                <div className="messageInfo">
                    <img
                        src=""
                        alt=""
                    />
                </div>
                <div className="messageContent">
                    <p className='mb-0'>{content}<span>just now</span></p>
                    {/* {message.img && <img src="{message.img}" alt="" />} */}
                </div>
            </div> :
                <div className="message">
                    <div className="messageInfo">
                        <img
                            src=""
                            alt=""
                        />
                    </div>
                    <div className="messageContent">
                        <p className='mb-0'>{messages[0].text}<span>just now</span></p>
                        {/* {message.img && <img src="{message.img}" alt="" />} */}
                    </div>
                </div>}
        </div>
    )
}

export default Message