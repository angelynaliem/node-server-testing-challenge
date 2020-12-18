const express = require("express");
const router = express.Router();

const Users = require("./users-model.js");

const restricted = require("../auth/restricted-middleware.js");

router.get("/", restricted, async (req, res, next) => {
  try {
    const users = await Users.find();
    res.status(200).json(users);
  } catch (err) {
    next({ apiCode: 500, apiMessage: "Db error getting users", ...err });
  }
});

router.delete("/:id", restricted, async (req, res, next) => {
  const { id } = req.params;

  try {
    const count = await Users.remove(id);
    if (count) {
      res.status(200).json({ message: `Deleted ${count} account/s` });
    } else {
      res.status(404).json({ message: "Invalid id" });
    }
  } catch (err) {
    next({ apiCode: 500, apiMessage: "Db error deleting user", ...err });
  }
});

router.get("/:username", restricted, async (req, res, next) => {
  const { username } = req.params;

  try {
    const userListing = await Users.getUserListing(username);
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
