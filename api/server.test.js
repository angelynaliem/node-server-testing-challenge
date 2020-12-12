const request = require("supertest");
const server = require("./server.js");
const db = require("../data/connection.js");

describe("server.js", () => {
  test("should be the testing environment", () => {
    expect(process.env.DB_ENV).toBe("testing");
  });

  describe("GET /", () => {
    test("returns 200", () => {
      return request(server)
        .get("/")
        .then((res) => {
          console.log(res);
          expect(res.status).toBe(200);
        });
    });

    test("be json", async () => {
      const res = await request(server).get("/");
      expect(res.type).toBe("application/json");
    });

    test("return the right object", async () => {
      const res = await request(server).get("/");
      expect(res.body).toEqual({ api: "up" });
    });
  });
});
