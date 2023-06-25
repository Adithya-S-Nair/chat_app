import React, { useContext } from 'react'
import { uniqBy } from 'lodash'
import Message from './Message'
import { UserContext } from '../Context/userContext';
import { MessageContext } from '../Context/messageContext'

const Messages = () => {
  const { user } = useContext(UserContext)
  const { messages } = useContext(MessageContext)
  const messagesWithoutDupes = uniqBy(messages, 'id');
  return (
    <div className='container mt-1'>
      {messagesWithoutDupes.map(message => (
        message.sender === user.userId ? (
          <Message key={message.id} isOur={true} content={message.text} />
        ) : (
          <Message key={message.id} isOur={false} content={message.text} />
        )
      ))}
    </div>
  )
}

export default Messages