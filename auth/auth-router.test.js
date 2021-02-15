const request = require("supertest");
const server = require("../api/server.js");
const db = require("../data/connection.js");

describe("Auth router", () => {
  describe("POST /api/auth/register", () => {
    beforeEach(async () => {
      await db("users").truncate();
    });

    test("adds a new user to the database", async () => {
      await request(server)
        .post("/api/auth/register")
        .send({ username: "angel", password: "password" });
      const [user] = await db("users");
      expect(user.username).toBe("angel");
    });

    test("returns a 201", async () => {
      const res = await request(server)
        .post("/api/auth/register")
        .send({ username: "darren", password: "password" });
      console.log(res);
      expect(res.status).toBe(201);
    });
  });
});
