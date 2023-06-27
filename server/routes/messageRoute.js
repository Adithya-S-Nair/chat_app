const express = require('express');
const router = express.Router();
const messageController = require('../controllers/messageController');
const checkAuth = require('../middlewares/checkAuth');

// Define message routes
router.get('/:userId', checkAuth, messageController.fetchAllMessages);

module.exports = router;