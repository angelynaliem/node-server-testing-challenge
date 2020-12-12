const router = require("express").Router();

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

// router.delete("/:id", restricted, async (req, res, next) => {
//   try {
//     res.status;
//   }
// });

module.exports = router;
