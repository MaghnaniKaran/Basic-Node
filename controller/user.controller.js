const express = require("express");
const UserController = express.Router();
const UserService = require("../services/user.service");

UserController.post("/add", async (req, res, next) => {
  const savedUser = await UserService.save(req.body);
  console.log(req.body)
  res.status(200).send({
    res: savedUser,
  });
});

UserController.get("/list", async (req, res, next) => {
  const userResponse = await UserService.get();
  res.status(200).send({
    res: userResponse,
  });
});

UserController.put("/", async (req, res, next) => {
  const updatedUser = await UserService.put(req.body);
  res.status(200).send({
    res: updatedUser,
  });
});

UserController.delete("/:id", async (req, res, next) => {
  const deletedUser = await UserService.remove(req.params.id);
  res.status(200).send({
    res: deletedUser,
  });
});

UserController.get("/:id", async (req, res, next) => {
  const id = req.params.id;
  const getByIdResponse = await UserService.getById(id);
  res.status(200).send({
    res: getByIdResponse,
  });
});

module.exports = UserController;
