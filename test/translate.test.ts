import { expect } from "chai";
import app from "../src/app";
import { agent as request } from "supertest";
import "mocha";

describe("GET /", () => {
  it("should return a error when number is bigger than quadrillion", async () => {
    return request(app)
      .get("/?translate=9999")
      .then((res) => {
        expect(res.status).to.equal(400);
        expect(res.text).to.include("Your number must be smaller then 1000");
      });
  });

  it("should return a error when number is negative", async () => {
    return request(app)
      .get("/?translate=-100")
      .then((res) => {
        expect(res.status).to.equal(400);
        expect(res.text).to.include("Must be a positive number");
      });
  });

  it("should return a error when is not a number", async () => {
    return request(app)
      .get("/?translate=aaa")
      .then((res) => {
        expect(res.status).to.equal(400);
        expect(res.text).to.include("Must be a number");
      });
  });

  it("should return a error when number is not integer", async () => {
    return request(app)
      .get("/?translate=1.5")
      .then((res) => {
        expect(res.status).to.equal(400);
        expect(res.text).to.include("Number must be integer");
      });
  });

  it("should translate the number 0", async () => {
    return request(app)
      .get("/?translate=0")
      .then((res) => {
        expect(res.status).to.equal(200);
        expect(res.text).to.include("zero");
      });
  });

  it("should translate the number 157", async () => {
    return request(app)
      .get("/?translate=157")
      .then((res) => {
        expect(res.status).to.equal(200);
        expect(res.text).to.include("one hundred fifty seven");
      });
  });
});
