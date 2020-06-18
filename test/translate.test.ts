import { expect } from "chai";
import app from "../src/app";
import { agent as request } from "supertest";
import "mocha";

describe("GET /", () => {
  it("should return a error when number is bigger than quadrillion", async () => {
    return request(app)
      .get("/?translate=9999999999999999999")
      .then((res) => {
        expect(res.status).to.equal(400);
      });
  });

  it("should return a error when number is negative", async () => {
    return request(app)
      .get("/?translate=-100")
      .then((res) => {
        expect(res.status).to.equal(400);
      });
  });

  it("should return a error when is not a number", async () => {
    return request(app)
      .get("/?translate=aaa")
      .then((res) => {
        expect(res.status).to.equal(400);
      });
  });

  it("should return a error when number is not integer", async () => {
    return request(app)
      .get("/?translate=1.5")
      .then((res) => {
        expect(res.status).to.equal(400);
      });
  });
});
