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
    const marketplace = await db("product")
      .join("users", "product.userId", "users.id")
      .join("location", "product.locationId", "location.id")
      .join("category", "product.categoryId", "category.id")
      .select(
        "users.username",
        "product.userId as userId",
        "product.name as productName",
        "product.description as productDescription",
        "product.price",
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
      .join("product", "users.id", "product.userId")
      .join("location", "product.locationId", "location.id")
      .join("category", "product.categoryId", "category.id")
      .where({ userId })
      // .first()
      .select(
        "users.username as username",
        "product.userId as userId",
        "product.name as productName",
        "product.description as productDescription",
        "product.price",
        "location.name as location",
        "category.name as category"
      )
      .orderBy("product.id");
    return userListing;
  } catch (err) {
    throw err;
  }
}
