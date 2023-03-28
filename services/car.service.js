const cars = require("../models/car.schema.model");

const get = async () => {
  // select * from car;
  return await cars.query();
};

const save = async (payload) => {
    // INSERT INTO car(id,name) VALUES(?,?);
    return await cars.query().insertGraphAndFetch(payload);
  };

module.exports = {
  get,
  save,
};
