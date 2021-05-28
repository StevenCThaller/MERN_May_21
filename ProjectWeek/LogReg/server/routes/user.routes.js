const UserController = require('../controllers/user.controllers');
const { authenticate } = require('../config/jwt.config');
const users = require('express').Router();


users.post('/register', UserController.registerUser);
users.post('/login', UserController.login);
users.get('/logout', authenticate, UserController.logout);
users.get('/all', authenticate, UserController.getUsers);


module.exports = users;