import React, { useContext, useEffect, useState } from 'react'
import { UserContext } from '../Context/userContext';
import { ChatContext } from '../Context/chatContext';
import { WSContext } from '../Context/wsContext';
import { MessageContext } from '../Context/messageContext';

const Chats = () => {
  const img = false
  const { user } = useContext(UserContext)
  const { ws, setWs } = useContext(WSContext)
  const { selectedChat, setSelectedChat } = useContext(ChatContext)
  const { messages, setMessages } = useContext(MessageContext)
  const [onlinePeople, setOnlinePeople] = useState({});
  const avatarColors = ["blue", "yellow", "green", "pink", "orange", "purple"]

  useEffect(() => {
    const ws = new WebSocket('ws://localhost:5000')
    setWs(ws);
    ws.addEventListener('message', handleMessage)
  }, [])

  const showOnlinePeople = (peopleArray) => {
    const people = {}
    peopleArray.forEach(({ userId, username }) => {
      people[userId] = username
    });
    setOnlinePeople(people)
  }

  const handleMessage = (ev) => {
    const messageData = JSON.parse(ev.data)
    console.log({ ev, messageData });
    if ('online' in messageData) {
      showOnlinePeople(messageData.online)
    } else if ('text' in messageData) {
      setMessages(prev => ([...prev, { ...messageData }]))
      console.log(messages);
    }
  }

  const onlinePeopleExclOurUser = { ...onlinePeople };
  user && delete onlinePeopleExclOurUser[user.userId];
  return (
    <div className="chats mt-3">
      {Object.keys(onlinePeopleExclOurUser).map(userId => {
        const username = onlinePeople[userId];
        if (username === undefined) {
          return null;
        }
        const userIdBase10 = parseInt(userId, 16)
        const colorIndex = userIdBase10 % avatarColors.length
        const avatarColor = avatarColors[colorIndex]
        return (
          <div
            onClick={() => setSelectedChat([userId, username])}
            className={"userChat container px-3 " + (userId === (selectedChat && selectedChat[0]) ? 'active' : '')}
            key={userId}>
            {img ? (
              <img src="https://static.vecteezy.com/system/resources/thumbnails/009/313/954/small/default-avatar-profile-in-flat-design-free-png.png" alt="" />
            ) : (
              <div className={`img ${avatarColor}`}>{username[0]}</div>
            )}
            <div className="userChatInfo user-select-none">
              <span>{username}</span>
              <p>latest msg</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Chats