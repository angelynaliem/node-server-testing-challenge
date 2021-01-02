const db = require("../data/connection.js");

module.exports = {
  addProduct,
  findProductById,
  updateProduct,
  removeProduct,
};

async function addProduct(product) {
  try {
    const [id] = await db("product").insert(product);
    return findProductById(id);
  } catch (err) {
    throw err;
  }
}

async function findProductById(id) {
  try {
    const product = await db("product").where({ id }).first();
    return product;
  } catch (err) {
    throw err;
  }
}

// async function updateProduct(changes, id) {
//   try {
//     const [id] = await db("products").where({ id }).update(changes);
//     return findProductById(id);
//   } catch (err) {
//     throw err;
//   }
// }

function updateProduct(changes, id) {
  return db("product")
    .where({ id })
    .update(changes)
    .then((count) => {
      return findProductById(id);
    });
}

async function removeProduct(id) {
  try {
    const removedProduct = await db("product").where({ id }).del();
    return removedProduct;
  } catch (err) {
    throw err;
  }
}
