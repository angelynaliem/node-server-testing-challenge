const db = require("../data/connection.js");

module.exports = {
  addProduct,
  findProductById,
  updateProduct,
  removeProduct,
};

async function addProduct(product) {
  try {
    const [id] = await db("products").insert(product);
    return findProductById(id);
  } catch (err) {
    throw err;
  }
}

async function findProductById(id) {
  try {
    const product = await db("products").where({ id }).first();
    return product;
  } catch (err) {
    throw err;
  }
}

async function updateProduct(changes, id) {
  try {
    const [productId] = await db("products").where({ id }).update(changes);
    return findProductById(productId);
  } catch (err) {
    throw err;
  }
}

async function removeProduct(id) {
  try {
    const removedProduct = await db("products").where({ id }).del();
    return removedProduct;
  } catch (err) {
    throw err;
  }
}
