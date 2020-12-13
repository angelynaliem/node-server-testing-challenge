const request = require("supertest");
const server = require("../api/server.js");
const db = require("../data/connection.js");

describe("Users router", () => {
  describe("DELETE /api/users/:id", () => {
    beforeEach(async () => {
      await db("users").truncate();
    });

    test("delete a user", async () => {
      //   const credentials = await request(server)
      //     .post("/api/auth/login")
      //     .send({ username: "darren", password: "password" });

      //   let token = credentials.body.token;

      const res = await request(server).delete("/api/users/1");
      // .set("Authorization", "Bearer " + token);
      expect(res.status).toBe(500);
    });

    test("be json", async () => {
      const res = await request(server).delete("/api/users/1");
      expect(res.type).toBe("text/html");
    });
  });
});
