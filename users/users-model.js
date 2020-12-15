const db = require("../data/connection.js");

module.exports = {
  add,
  find,
  findBy,
  findById,
  remove,
};

// async function add(userData) {
//   try {
//     const ids = await db("users").insert(userData);
//     const newUser = await findById(ids[0]);
//     return newUser;
//   } catch (err) {
//     throw err;
//   }
// }

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
    const user = await db("users").where(filter);
    return user;
  } catch (err) {
    throw err;
  }
}

async function findById(id) {
  try {
    const user = await db("users").where({ id }).first();
    return user;
  } catch (err) {
    throw err;
  }
}

async function remove(id) {
  try {
    return await db("users").del().where({ id });
  } catch (err) {
    throw err;
  }
}
