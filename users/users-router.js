const express = require("express");
const router = express.Router();

const Users = require("./users-model.js");

const restricted = require("../auth/restricted-middleware.js");

//Get list of products sold by ALL users

router.get("/", restricted, async (req, res, next) => {
  try {
    const users = await Users.find();
    res.status(200).json(users);
  } catch (err) {
    next({ apiCode: 500, apiMessage: "Db error getting users", ...err });
  }
});

//Delete a specified user (id)

router.delete("/:id", restricted, async (req, res, next) => {
  const { id } = req.params;

  try {
    const count = await Users.removeUser(id);
    if (count) {
      res.status(200).json({ message: `Deleted ${count} account/s` });
    } else {
      res.status(404).json({ message: "Invalid id" });
    }
  } catch (err) {
    next({ apiCode: 500, apiMessage: "Db error deleting user", ...err });
  }
});

//Get list of products sold by the specified user (id)

router.get("/:id", restricted, async (req, res, next) => {
  const { id } = req.params;

  try {
    const userListing = await Users.getUserListing(id);
    if (userListing) {
      res.status(200).json(userListing);
    } else {
      res.status(404).json({ message: "Invalid id" });
    }
  } catch (err) {
    next({
      apiCode: 500,
      apiMessage: "Db error retrieving the user's listing",
      ...err,
    });
  }
});

// router.get("/:username/:id", restricted, async (req, res, next) => {
//   const { id } = req.params;

//   try {
//     const productList = await Users.findProductById(id);
//     if (productList) {
//       res.status(200).json(productList);
//     } else {
//       res.status(404).json({ message: "Invalid product id" });
//     }
//   } catch (err) {
//     next({
//       apiCode: 500,
//       apiMessage: "Db error finding the product id",
//       ...err,
//     });
//   }
// });

// router.post("/:username", restricted, async (req, res, next) => {
//   const product = req.body;
//   const { username } = req.params;

//   try {
//     const newProduct = await Users.addProduct(product);
//     if (newProduct) {
//       res.status(200).json(newProduct);
//     } else {
//       res.status(404).json({ message: "Failed to post a new product" });
//     }
//   } catch (err) {
//     next({
//       apiCode: 500,
//       apiMessage: "Db error posting the new product",
//       ...err,
//     });
//   }
// });

// router.put("/:username/:id", restricted, async (req, res, next) => {
//   const changes = req.body;
//   const { id } = req.params;

//   try {
//     const updatedProduct = await Users.updateProduct(changes, id);
//     if (updatedProduct) {
//       res.status(200).json(updatedProduct);
//     } else {
//       res
//         .status(404)
//         .json({ message: "Could not update the specified product" });
//     }
//   } catch (err) {
//     next({
//       apiCode: 500,
//       apiMessage: "Db error updating the specified product",
//       ...err,
//     });
//   }
// });

// router.delete("/:username/:id", restricted, async (req, res, next) => {
//   const { id } = req.params;

//   try {
//     const removedProduct = await Users.removeProduct(id);
//     if (removedProduct) {
//       res.status(200).json(removedProduct);
//     } else {
//       res.status(404).json({ message: "Failed to delete the product" });
//     }
//   } catch (err) {
//     next({
//       apiCode: 500,
//       apiMessage: "Db error deleting the product",
//       ...err,
//     });
//   }
// });

module.exports = router;
