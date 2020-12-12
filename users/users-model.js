const db = require("../data/connection.js");

module.exports = {
  find,
};

function find() {
  return db("users as User").select("User.id", "User.username");
}
