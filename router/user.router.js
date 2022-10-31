const express = require("express");
const UserRouter = express.Router();
const UserController = require("../controller/user.controller");

UserRouter.use("/users", UserController);

module.exports = UserRouter;
