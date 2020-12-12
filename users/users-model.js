const db = require("../data/connection.js");

module.exports = {
  add,
  find,
  findBy,
  findById,
};

async function add(user) {
  const [id] = await db("users").insert(user, "id");

  return findById(id);
}

async function find() {
  try {
    return await db("users");
  } catch (err) {
    throw err;
  }
}

async function findBy(filter) {
  try {
    const user = await db("users as User").where(filter);
    return user;
  } catch (err) {
    throw err;
  }
}

function findById(id) {
  return db("users").where({ id }).first();
}
