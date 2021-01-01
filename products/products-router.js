const express = require("express");
const productsRouter = express.Router();

const Products = require("./products-model.js");

const restricted = require("../auth/restricted-middleware.js");

//Add a new product for the specified user

productsRouter.post("/", restricted, async (req, res, next) => {
  const product = req.body;

  try {
    const newProduct = await Products.addProduct(product);
    if (newProduct) {
      res.status(200).json(newProduct);
    } else {
      res.status(404).json({ message: "Failed to post a new product" });
    }
  } catch (err) {
    next({
      apiCode: 500,
      apiMessage: "Db error posting the new product",
      ...err,
    });
  }
});

// Find product by product id for the specified user

productsRouter.get("/:id", restricted, async (req, res, next) => {
  const { id } = req.params;

  try {
    const product = await Products.findProductById(id);
    if (product) {
      res.status(200).json(product);
    } else {
      res.status(404).json({ message: "Invalid product id" });
    }
  } catch (err) {
    next({
      apiCode: 500,
      apiMessage: "Db error finding the product id",
      ...err,
    });
  }
});

// Updates an existing product

productsRouter.put("/:id", restricted, async (req, res, next) => {
  const changes = req.body;
  const { id } = req.params;

  try {
    const updatedProduct = await Products.updateProduct(changes, id);
    if (updatedProduct) {
      res.status(200).json(updatedProduct);
    } else {
      res
        .status(404)
        .json({ message: "Could not update the specified product" });
    }
  } catch (err) {
    next({
      apiCode: 500,
      apiMessage: "Db error updating the specified product",
      ...err,
    });
  }
});

// Removes an existing product

productsRouter.delete("/:id", restricted, async (req, res, next) => {
  const { id } = req.params;

  try {
    const removedProduct = await Products.removeProduct(id);
    if (removedProduct) {
      res.status(200).json(removedProduct);
    } else {
      res.status(404).json({ message: "Failed to delete the product" });
    }
  } catch (err) {
    next({
      apiCode: 500,
      apiMessage: "Db error deleting the product",
      ...err,
    });
  }
});

module.exports = productsRouter;
