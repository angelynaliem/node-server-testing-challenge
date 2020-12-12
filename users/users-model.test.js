const { default: expectCt } = require("helmet/dist/middlewares/expect-ct");
const request = require("supertest");
const server = require("../api/server.js");
const db = require("../data/connection.js");
// const Users = require("./users-model.js");

beforeAll(() => db.seed.run());

// describe("Users model", () => {
//   describe("find()", () => {
//     beforeEach(async () => {
//       await db("users").truncate();
//     });
// });

//     test("finds the list of users", async () => {
//       const users = await db("users");
//       expect(users).toHaveLength(4);
//     });
//   });
// });

describe("GET /api/users", () => {
  test("returns 404", () => {
    return request(server)
      .get("/api/users")
      .then((res) => {
        expect(res.status).toBe(404);
      });
  });
});
