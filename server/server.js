require("dotenv").config();
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const socketIO = require('socket.io');
const User = require("./schema/user-schema");

const PORT = process.env.PORT || 5000;
const app = express();
const server = require('http').Server(app);
const io = socketIO(server);

app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true }));

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

app.post('/login', (req, res) => {
  const { username, email, password } = req.body;
  const newUser = new User({
    username,
    email,
    password
  });
  newUser.save()
  .then(() => {
    res.status(201).json({ message: 'User created successfully' });
  })
  .catch(error => {
    res.status(500).json({ error: 'Error creating user' });
  });
});


server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
