const express = require('express');
const ImdbRouter = express.Router();
const ImdbController = require('../controller/imdb.controller')

ImdbRouter.use('/imdb', ImdbController);

module.exports = ImdbRouter