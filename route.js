const express = require("express");
const RootRouter = express.Router();
const pkg = require("./package.json");
const UserRouter = require("./router/user.router");
const ImdbRouter = require("./router/imdb.router");
const AuthRouter = require("./router/auth.router");
const CarRouter = require("./router/car.router");

RootRouter.use(`/api/v${parseInt(pkg.version)}`, UserRouter);
RootRouter.use(`/api/v${parseInt(pkg.version)}`, ImdbRouter);
RootRouter.use(`/api/v${parseInt(pkg.version)}`, AuthRouter);
RootRouter.use(`/api/v${parseInt(pkg.version)}`, CarRouter);

module.exports = RootRouter;
