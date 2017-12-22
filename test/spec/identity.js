var identity = require("../../src/identity");
var expect = require("chai").expect;

describe("Identity Suite", function() {
  describe("when calling `noop`", function() {
    describe("with no arguments", function() {
      var result;
      beforeEach(function() {
        result = identity();
      });

      it("then result is `undefined`", function() {
        expect(result).to.equal(undefined);
      });
    });

    describe("with an argument", function() {
      var result;
      beforeEach(function() {
        result = identity(1);
      });

      it("then result is `1`", function() {
        expect(result).to.equal(1);
      });
    });

    describe("with multiple arguments", function() {
      var result;
      beforeEach(function() {
        result = identity(1, 2, 3);
      });

      it("then result is `1`", function() {
        expect(result).to.equal(1);
      });
    });
  });
});
