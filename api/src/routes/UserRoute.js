const express = require('express');
const router = express.Router();

const UserController = require('../controllers/UserController');

router.get('/', UserController.getAllUsers);
router.post('/register', UserController.registerUser);
router.post('/login', UserController.loginUser);
router.get('logout', UserController.logoutUser);
router.get('/profile', UserController.userProfile);

module.exports = router;