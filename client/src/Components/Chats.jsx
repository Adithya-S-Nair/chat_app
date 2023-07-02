import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios'
import { Skeleton } from '@mui/material';
import { UserContext } from '../Context/userContext';
import { WSContext } from '../Context/wsContext';
import { MessageContext } from '../Context/messageContext';
import Contacts from './Contacts';

const Chats = () => {
  const img = false;
  const { user } = useContext(UserContext);
  const { setWs } = useContext(WSContext);
  const { setMessages } = useContext(MessageContext);
  const [onlinePeople, setOnlinePeople] = useState({});
  const [offlinePeople, setOfflinePeople] = useState({});
  const [loadingChats, setLoadingChats] = useState(true);
  const avatarColors = ["blue", "yellow", "green", "pink", "orange", "purple"];

  useEffect(() => {
    connectToWs();
    setTimeout(() => {
      setLoadingChats(false);
    }, 500);
  }, []);

  const connectToWs = () => {
    const ws = new WebSocket('ws://localhost:5000');
    setWs(ws);
    ws.addEventListener('message', handleMessage);
    ws.addEventListener('close', () => {
      setTimeout(() => {
        console.log('Disconnected trying to reconnect');
        connectToWs();
      }, 1000);
    });
  };

  const showOnlinePeople = (peopleArray) => {
    const people = {};
    peopleArray.forEach(({ userId, username }) => {
      people[userId] = username;
    });
    setOnlinePeople(people);
  };

  const handleMessage = (ev) => {
    const messageData = JSON.parse(ev.data);
    if ('online' in messageData) {
      showOnlinePeople(messageData.online);
    } else if ('text' in messageData) {
      setMessages((prev) => ([...prev, { ...messageData }]));
    }
  };

  useEffect(() => {
    if (user) {
      axios.get('/people').then((response) => {
        const offlinePeopleArr = response.data
          .filter(p => p._id !== user.userId)
          .filter(p => !Object.keys(onlinePeople).includes(p._id))
        const offlinePeople = {};
        offlinePeopleArr.forEach(p => {
          offlinePeople[p._id] = p
        })
        setOfflinePeople(offlinePeople)
      })
    }
  }, [onlinePeople])

  const onlinePeopleExclOurUser = { ...onlinePeople };
  user && delete onlinePeopleExclOurUser[user.userId];

  return (
    <div className="chats mt-3">
      {loadingChats ? (
        <>
          <div className='d-flex gap-2 ps-2 pt-2'>
            <Skeleton variant="circular" width={60} height={60} animation="wave" style={{ backgroundColor: '#242f3d' }} />
            <div>
              <Skeleton variant="text" width={100} animation="wave" style={{ backgroundColor: '#242f3d' }} />
              <Skeleton variant="text" width={200} animation="wave" style={{ backgroundColor: '#242f3d' }} />
            </div>
          </div>
          <div className='d-flex gap-2 ps-2 pt-2'>
            <Skeleton variant="circular" width={60} height={60} animation="wave" style={{ backgroundColor: '#242f3d' }} />
            <div>
              <Skeleton variant="text" width={100} animation="wave" style={{ backgroundColor: '#242f3d' }} />
              <Skeleton variant="text" width={200} animation="wave" style={{ backgroundColor: '#242f3d' }} />
            </div>
          </div>
        </>
      ) : (
        <>
          {Object.keys(onlinePeopleExclOurUser).map((userId) => {
            const username = onlinePeople[userId];
            if (username === undefined) {
              return null;
            }
            const userIdBase10 = parseInt(userId, 16);
            const colorIndex = userIdBase10 % avatarColors.length;
            const avatarColor = avatarColors[colorIndex];
            return (
              <Contacts key={userId} avatarColor={avatarColor} userId={userId} username={username} online={true} />
            );
          })}
          {Object.keys(offlinePeople).map((userId) => {
            const username = offlinePeople[userId].username;
            if (username === undefined) {
              return null;
            }
            const userIdBase10 = parseInt(userId, 16);
            const colorIndex = userIdBase10 % avatarColors.length;
            const avatarColor = avatarColors[colorIndex];
            return (
              <Contacts key={userId} avatarColor={avatarColor} userId={userId} username={username} online={false} />
            );
          })}
        </>
      )}
    </div>
  );
};

export default Chats;
