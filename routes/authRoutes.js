const express = require('express');
const router = express.Router();
const { login, register, getAllUsers, deleteUser, getUserInfo } = require('../controllers/authController');

router.post('/login', login);
router.post('/register', register);
router.get('/users', getAllUsers);
router.delete('/users/:id', deleteUser);
router.get('/user', getUserInfo);

module.exports = router; 