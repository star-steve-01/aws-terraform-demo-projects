import { describe, test, expect } from "vitest";
import req from "supertest";
import app from "../src/app.js";

describe("API tests", () => {
  test("GET / should return default message.", async () => {
    const res = await req(app).get("/");

    expect(res.status).toEqual(200);
    expect(res.body).toEqual({ message: "Default message from nodejs-express-api-server." });
  });

  test("GET /:name should return default message with name param.", async () => {
    const name = "steve";
    const res = await req(app).get("/" + name);

    expect(res.status).toEqual(200);
    expect(res.body).toEqual({ message: `Your name is ${name}` });
  });
});