const db = require("../data/connection.js");

module.exports = {
  add,
  find,
  findBy,
  findById,
  remove,
  getUserListing,
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
    const marketplace = await db("users_products")
      .join("users", "users_products.userId", "users.id")
      .join("products", "users_products.productId", "products.id")
      .join("location", "products.locationId", "location.id")
      .join("category", "products.categoryId", "category.id")
      .select(
        "users.username",
        "products.name as product_name",
        "products.description",
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

async function remove(id) {
  try {
    return await db("users").del().where({ id });
  } catch (err) {
    throw err;
  }
}

async function getUserListing(username) {
  try {
    const userListing = await db("users")
      .join("users_products", "users.id", "users_products.userId")
      .join("products", "users_products.productId", "products.id")
      .join("location", "products.locationId", "location.id")
      .join("category", "products.categoryId", "category.id")
      .where({ username })
      .first()
      .select(
        "products.name as product_name",
        "products.description",
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
