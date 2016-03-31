/*jshint -W030 */

var pick = require("src/pick");

describe("pick Suite", function() {
  describe("when calling `pick`", function() {
    describe("with no arguments", function() {
      var result;
      beforeEach(function() {
        result = pick();
      });

      it("then result is an empty object", function() {
        expect(result).to.be.empty;
      });
    });

    describe("with a single numeric argument", function() {
      var result;
      beforeEach(function() {
        result = pick(1);
      });

      it("then result is an empty object", function() {
        expect(result).to.be.empty;
      });
    });

    describe("with multiple numeric arguments", function() {
      var result;
      beforeEach(function() {
        result = pick(1, 2, 3);
      });

      it("then result is an empty object", function() {
        expect(result).to.be.empty;
      });
    });

    describe("with an input object", function() {
      var result, input;
      beforeEach(function() {
        input = {
          "hello": "hello world!",
          "other": "random value",
          "return this": "we are expecting only this"
        };
      });

      describe("and the input criteria is a string key that exists", function() {
        beforeEach(function() {
          result = pick(input, "hello");
        });

        it("then extracting the key returns an object with its corresponding value", function() {
          expect(result).to.deep.equal({
            "hello": "hello world!"
          });
        });
      });

      describe("and input criteria is a string key that does not exist", function() {
        beforeEach(function() {
          result = pick(input, "world");
        });

        it("then extracting the key returns an empty object", function() {
          expect(result).to.be.empty;
        });
      });

      describe("and the input criteria is an object with keys/values pairs that exist", function() {
        beforeEach(function() {
          result = pick(input, {"return this": "we are expecting only this", "other": "random value"});
        });

        it("then extracting the matching key value pairs returns a new object with the corresponding values", function() {
          expect(result).to.deep.equal({
            "other": "random value",
            "return this": "we are expecting only this"
          });
        });
      });

      describe("and the input criteria is an object with two matching keys and one matching value", function() {
        beforeEach(function() {
          result = pick(input, {"return this": "BRAH!", "other": "random value"});
        });

        it("then the two existing keys generates an object with the corresponding two values", function() {
          expect(result).to.deep.equal({
            "other": "random value",
            "return this": "we are expecting only this"
          });
        });
      });

      describe("and the input criteria is an array with two keys that exist", function() {
        beforeEach(function() {
          result = pick(input, ["other", "return this"]);
        });

        it("then the two existing keys generates an object with the two values", function() {
          expect(result).to.deep.equal({
            "other": "random value",
            "return this": "we are expecting only this"
          });
        });

        it("then the value with no matching key is never returned", function() {
          expect(result.zipCode).to.equal(undefined);
        });
      });

      describe("and the input criteria is an array with one key that exists and another keys that does not", function() {
        beforeEach(function() {
          result = pick(input, ["other", "test"]);
        });

        it("then the two existing keys generates an object with the two values", function() {
          expect(result).to.deep.equal({
            "other": "random value"
          });
        });
      });
    });

  });
});
