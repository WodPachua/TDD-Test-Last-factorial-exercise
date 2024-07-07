import { assert } from "chai";
import { factorial } from "../factorial.js";

describe("Finding factorial of number", function () {
  it("Correct factorial should be returned", function () {
    assert.equal(factorial(5), 120);
  });
});
