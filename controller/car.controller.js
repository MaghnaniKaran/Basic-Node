const express = require("express");
const CarController = express.Router();
const CarService = require("../services/car.service");


CarController.get("/list", async (req, res, next) => {
  const carResponse = await CarService.get();
  res.status(200).send({
    res: carResponse,
  });
});

CarController.post("/add", async (req, res, next) => {
    const savedCar = await CarService.save(req.body);
    res.status(200).send({
      res: savedCar,
    });
  });


module.exports = CarController;
