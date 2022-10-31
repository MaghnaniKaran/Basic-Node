const express = require('express');
const AuthRouter = express.Router();
const AuthController = require('../controller/auth.controller')

AuthRouter.use('/auth', AuthController);

module.exports = AuthRouter