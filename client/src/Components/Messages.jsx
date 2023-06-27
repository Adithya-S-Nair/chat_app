import React, { useContext, useRef, useEffect } from 'react'
import axios from 'axios'
import { uniqBy } from 'lodash'
import Message from './Message'
import { UserContext } from '../Context/userContext';
import { ChatContext } from '../Context/chatContext';
import { MessageContext } from '../Context/messageContext'

const Messages = ({ avatarColor }) => {
  const { user } = useContext(UserContext)
  const { selectedChat } = useContext(ChatContext)
  const { messages, setMessages } = useContext(MessageContext)
  const messagesWithoutDupes = uniqBy(messages, '_id');
  const messagesContainerRef = useRef(null);

  useEffect(() => {
    const messagesContainer = messagesContainerRef.current;
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
  }, [messages]);

  useEffect(() => {
    if (selectedChat) {
      axios.get('/messages/' + selectedChat[0]).then((response) => {
        setMessages(response.data)
      })
    }
  }, [selectedChat])

  return (
    <div className='container mt-1 h-100 overflow-auto pb-5 custom-scrollbar' ref={messagesContainerRef} style={{ scrollBehavior: 'smooth' }}>
      <div className="pb-5">
        {messagesWithoutDupes.map(message => (
          message.sender === user.userId ? (
            <Message key={message.id} isOur={true} content={message.text} avatarColor={avatarColor} />
          ) : (
            <Message key={message.id} isOur={false} content={message.text} avatarColor={avatarColor} />
          )
        ))}
      </div>
    </div>
  )
}

export default Messages