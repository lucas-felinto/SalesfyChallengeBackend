import { expect } from "chai";
import app from "../src/app";
import { agent as request } from "supertest";

describe("Translate test", () => {
  it("should return a error when number is bigger than quadrillion", async () => {
    const res = await request(app).get("/?translate=999999999999");
    expect({ error: "Your number must be smaller then 999999999999999" });
  });

  it("should return a error when is not a number", async () => {
    const res = await request(app).get("/?translate=aaa");
    expect({ error: "Must be a number" });
  });

  it("should return a error when number is not integer", async () => {
    const res = await request(app).get("/?translate=1.5");
    expect({ error: "Number must be integer" });
  });
});
