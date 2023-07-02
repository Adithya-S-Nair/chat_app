import React, { useState, useContext } from 'react';
import { WSContext } from '../Context/wsContext';
import { ChatContext } from '../Context/chatContext';
import { UserContext } from '../Context/userContext';
import { MessageContext } from '../Context/messageContext';

const Input = () => {
    const { user } = useContext(UserContext)
    const { ws } = useContext(WSContext);
    const { selectedChat } = useContext(ChatContext);
    const [newMsg, setNewMsg] = useState('');
    const { messages, setMessages } = useContext(MessageContext);
    const [img, setImg] = useState(null);
    if (!newMsg) {
        document.querySelectorAll('button').setAttribute = 'disabled'
    }
    const sendMessage = (ev) => {
        ev.preventDefault();
        ws.send(JSON.stringify({
            recipient: selectedChat[0],
            text: newMsg,
        }));
        setNewMsg('')
        setMessages(prev => ([...prev, {
            text: newMsg,
            sender: user.userId,
            recipient: selectedChat[0],
            id: Date.now().toString()
        }]))
        console.log(messages);
    }
    return (
        <form className="input" onSubmit={sendMessage}>
            <input
                value={newMsg}
                type="text"
                placeholder="Type a message"
                onChange={(ev) => setNewMsg(ev.target.value)}
            />
            <div className="send">
                <img src="" alt="" />
                <input
                    type="file"
                    style={{ display: "none" }}
                    id="file"
                    onChange={(ev) => setImg(ev.target.files[0])}
                />
                <label htmlFor="file">
                    <i className="fa fa-paperclip text-default pointer pt-2" aria-hidden="true"></i>
                </label>
                <button type='submit'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                    </svg>
                </button>
            </div>
        </form>
    )
}

export default Input