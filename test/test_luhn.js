var assert = require("chai").assert;
var checkConstructor = require("../lib/luhn");

describe("is this lun?", function() {
  it("should return true if input is a luhn.", function() {
    var accnt = "79927398713"; // verified luhn
    var result = new checkConstructor(accnt).isThisLuhn;
    assert.isTrue(result);
  });

  it("should return true if input is a luhn.", function() {
    var accnt = "79927398710"; // verified luhn
    var result = new checkConstructor(accnt).isThisLuhn;
    assert.isFalse(result);
  });

  it("should return true if input id is passed correctly", function() {
    var accnt = "79927398713"; // verified luhn
    var result = new checkConstructor(accnt).id;
    assert.equal(accnt, result);
  });

  it("should return true if last char is removed correctly", function() {
    var accnt = "79927398713"; // verified luhn
    var result = new checkConstructor(accnt).idx;
    assert.equal("7992739871", result);
  });

});