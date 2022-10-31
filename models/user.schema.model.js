const Model = require("../models/db_connection");

class Users extends Model {
  static get tableName() {
    return "users_data";
  }

  static get idColumn() {
    return "id";
  }
}

module.exports = Users;
