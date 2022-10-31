const users = require("../models/user.schema.model");

const get = async () => {
  // select * from users;
  return await users.query();
};

const save = async (payload) => {
  // INSERT INTO users(id,name,phno,city) VALUES(?,?,?,?);
  return await users.query().insertGraphAndFetch(payload);
};

const getById = async (id) => {
  // select * from users where id=id
  return await users.query().where("id", id).first();
};

const put = async (payload) => {
  // update table users set [...payload]
  return await users.query().upsertGraphAndFetch(payload);
};

const remove = async (id) => {
  return await users.query().deleteById(id);
};

module.exports = {
  get,
  save,
  getById,
  put,
  remove,
};
