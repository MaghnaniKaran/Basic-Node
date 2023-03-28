require("dotenv").config();
const jwt = require("jsonwebtoken");

const sign = (payload) => {
  return jwt.sign(payload, process.env.CIPHER, {
    algorithm: "HS256",
    expiresIn: "1h",
  });
};

const decode = (token) => {
  return jwt.decode(token);
};

const verify = (token) => {
  return jwt.verify(token, process.env.CIPHER);
};

module.exports = {
  sign,
  decode,
  verify,
};
