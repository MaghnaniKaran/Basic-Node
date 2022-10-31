require("dotenv").config();
const express = require("express");
const app = express();
const morgan = require("morgan");
const RootRouter = require("./route");

app.use(RootRouter);
app.use(express.json());
app.use(morgan("dev"));

app.listen(process.env.PORT, () => {
  console.log(
    `Your server is running on ${process.env.PROTOCOL}://${process.env.HOST}:${process.env.PORT}`
  );
});
