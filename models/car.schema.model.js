const Model = require("../models/db_connection");

class Cars extends Model {
  static get tableName() {
    return "Car";
  }

  static get idColumn() {
    return "id";
  }
}

module.exports = Cars;
