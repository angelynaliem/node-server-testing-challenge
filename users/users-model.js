const db = require("../data/connection.js");

module.exports = {
  add,
  find,
  findBy,
  findById,
  removeUser,
  getUserListing,
};

async function add(user) {
  const [id] = await db("users").insert(user, "id");
  return findById(id);
}

async function find() {
  try {
    const marketplace = await db("products")
      .join("users", "products.userId", "users.id")
      .join("location", "products.locationId", "location.id")
      .join("category", "products.categoryId", "category.id")
      .select(
        "users.username",
        "products.userId as userId",
        "products.name as productName",
        "products.description as productDescription",
        "products.price",
        "location.name as location",
        "category.name as category"
      );
    return marketplace;
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

async function removeUser(id) {
  try {
    return await db("users").del().where({ id });
  } catch (err) {
    throw err;
  }
}

async function getUserListing(userId) {
  try {
    const userListing = await db("users")
      .join("products", "users.id", "products.userId")
      .join("location", "products.locationId", "location.id")
      .join("category", "products.categoryId", "category.id")
      .where({ userId })
      // .first()
      .select(
        "users.username as username",
        "products.userId as userId",
        "products.name as productName",
        "products.description as productDescription",
        "products.price",
        "location.name as location",
        "category.name as category"
      )
      .orderBy("products.id");
    return userListing;
  } catch (err) {
    throw err;
  }
}
