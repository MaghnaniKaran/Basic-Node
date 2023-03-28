const express = require("express");
const AuthController = express.Router();
const { login } = require("../services/auth.service");
const { sign } = require("../utils/auth.util");

AuthController.post("/login", async (req, res) => {
  await login(req.body)
    .then(() => {
      delete req.body.password;
      const token = sign(req.body);
      res.status(200).send({
        token: token,
      });
    })
    .catch(() => {
      res.sendStatus(400);
    });
});

module.exports = AuthController;
