const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const checkAuth = require('../middlewares/checkAuth');

// Define the routes
router.post('/register', userController.registerUser);
router.post('/login',userController.loginUser)
router.get('/home',checkAuth,userController.home)

module.exports = router;