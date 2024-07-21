const express = require('express');
const router = express.Router();

const UserController = require('../controllers/UserController');

router.get('/', UserController.getAllUsers);
router.post('/register', UserController.registerUser);
router.post('/login', UserController.loginUser);
router.post('/logout', UserController.logoutUser);
router.get('/profile', UserController.userProfile);
router.post('/forgot-password', UserController.forgotPassword);
router.post('/reset-password/:id/:token', UserController.resetPassword);

module.exports = router;