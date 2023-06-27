require("dotenv").config();
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const ws = require('ws');
const userRoute = require('./routes/userRoute');
const messageRoute = require('./routes/messageRoute');
const jwt = require('jsonwebtoken');
const Message = require('./models/messageModel')
const PORT = process.env.PORT || 5000;
const app = express();

app.use(cors({ origin: process.env.CLIENT_URL, credentials: true }));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Use the routes
app.use('/', userRoute);
app.use('/messages', messageRoute);

mongoose.connect(process.env.MONGODB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

const server = app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
})

const wss = new ws.WebSocketServer({ server });
wss.on('connection', (connection, req) => {
  console.log("Connected to a client");
  const cookies = req.headers.cookie

  if (cookies) {
    const tokenCookieString = cookies.split(';').find(str => str.startsWith('token'))
    if (tokenCookieString) {
      const token = tokenCookieString.split('=')[1]
      if (token) {
        jwt.verify(token, process.env.JWT_SECRET, {}, (err, userData) => {
          if (err) throw err
          const { userId, username } = userData
          connection.userId = userId;
          connection.username = username;
        })
      }
    }
  }
  connection.on('message', async (message) => {
    messageData = JSON.parse(message.toString());
    const { recipient, text } = messageData
    if (recipient && text) {
      const messageDoc = await Message.create({
        sender: connection.userId,
        recipient,
        text
      });
      [...wss.clients]
        .filter(c => c.userId === recipient)
        .forEach(c => c.send(JSON.stringify({
          text,
          sender: connection.userId,
          recipient,
          _id: messageDoc._id
        })))
    }
  });

  [...wss.clients].forEach((client) => {
    client.send(JSON.stringify({
      online: [...wss.clients].map(c => ({ userId: c.userId, username: c.username }))
    }
    ))
  });
})