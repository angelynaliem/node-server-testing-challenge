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

module.exports = router;
