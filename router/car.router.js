const express = require("express");
const CarRouter = express.Router();
const CarController = require("../controller/car.controller");

CarRouter.use("/cars", CarController);

module.exports = CarRouter;