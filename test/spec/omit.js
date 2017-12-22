var omit = require("../../src/omit");
var expect = require("chai").expect;

describe("omit Suite", function() {
  describe("when calling `omit`", function() {
    describe("with no arguments", function() {
      var result;
      beforeEach(function() {
        result = omit();
      });

      it("then result is an empty object", function() {
        expect(result).to.be.empty;
      });
    });

    describe("with a single numeric argument", function() {
      var result;
      beforeEach(function() {
        result = omit(1);
      });

      it("then result is an empty object", function() {
        expect(result).to.be.empty;
      });
    });

    describe("with multiple numeric arguments", function() {
      var result;
      beforeEach(function() {
        result = omit(1, 2, 3);
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

      describe("and a string key that exists", function() {
        beforeEach(function() {
          result = omit(input, "hello");
        });

        it("then the results omits the matching key", function() {
          expect(result).to.deep.equal({
            "other": "random value",
            "return this": "we are expecting only this"
          });
        });
      });

      describe("and a string key that does not exist", function() {
        beforeEach(function() {
          result = omit(input, "world");
        });

        it("then the results does not omit anything", function() {
          expect(result).to.deep.equal(input);
        });
      });

      describe("and keys/values objects that exist", function() {
        beforeEach(function() {
          result = omit(input, {"hello": "hello world!"});
        });

        it("then the results omits only the matching key", function() {
          expect(result).to.deep.equal({
            "other": "random value",
            "return this": "we are expecting only this"
          });
        });
      });

      describe("and a matching with key no matching value", function() {
        beforeEach(function() {
          result = omit(input, {"hello": "USA!"});
        });

        it("then the results omits the matching key, regardless of its value", function() {
          expect(result).to.deep.equal({
            "other": "random value",
            "return this": "we are expecting only this"
          });
        });
      });

      describe("and an array for two keys that exist", function() {
        beforeEach(function() {
          result = omit(input, ["hello", "other"]);
        });

        it("then the result omits both the matching key", function() {
          expect(result).to.deep.equal({
            "return this": "we are expecting only this"
          });
        });
      });

      describe("and an array for one key that exists and another keys that does not exist", function() {
        beforeEach(function() {
          result = omit(input, ["hello", "not really here"]);
        });

        it("then the result omits only the matching key", function() {
          expect(result).to.deep.equal({
            "other": "random value",
            "return this": "we are expecting only this"
          });
        });
      });
    });

  });
});
