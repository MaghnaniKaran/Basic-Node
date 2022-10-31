const express = require("express");
const RootRouter = express.Router();
const pkg = require("./package.json");
const UserRouter = require("./router/user.router");
const ImdbRouter = require('./router/imdb.router');
const AuthRouter = require('./router/auth.router');

RootRouter.use(`/api/v${parseInt(pkg.version)}`, UserRouter)
RootRouter.use(`/api/v${parseInt(pkg.version)}`, ImdbRouter)
RootRouter.use(`/api/v${parseInt(pkg.version)}`, AuthRouter)

module.exports = RootRouter;
