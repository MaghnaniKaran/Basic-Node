const users = require("../models/user.schema.model");

const login = async (payload) => {
  // select * from users where email=username and password = password;
  return await users
    .query()
    .where("email", payload.email)
    .andWhere("password", payload.password)
    .first();
};

module.exports = { login };
