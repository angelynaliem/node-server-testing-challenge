const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
// const session = require("express-session");
// const knexSessionStore = require("connect-session-knex")(session);

// const authenticate = require("../auth/restricted-middleware.js");
const authRouter = require("../auth/auth-router.js");
const usersRouter = require("../users/users-router.js");

const server = express();

// const sessionConfig = {
//   name: "bwbe",
//   secret: "bwbe secret",
//   cookie: {
//     maxAge: 1000 * 3600,
//     secure: false,
//     httpOnly: true,
//   },
//   resave: false,
//   saveUninitialized: false,
//   store: new knexSessionStore({
//     knex: require("../data/connection.js"),
//     tablename: "session",
//     sidfieldname: "sid",
//     createTable: true,
//     clearInterval: 1000 * 3600,
//   }),
// };

server.use(helmet());
server.use(express.json());
server.use(cors());
// server.use(session(sessionConfig));

server.use("/api/auth", authRouter);
server.use("/api/users", usersRouter);

server.get("/", (req, res) => {
  res.status(200).json({ api: "up" });
});

module.exports = server;
