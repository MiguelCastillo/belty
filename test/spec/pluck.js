/*jshint -W030 */

var pluck = require("src/pluck");

describe("pluck Suite", function() {
  describe("when calling `pluck`", function() {
    describe("with no arguments", function() {
      var result;
      beforeEach(function() {
        result = pluck();
      });

      it("then result is `undefined`", function() {
        expect(result).to.equal(undefined);
      });
    });

    describe("with one argument", function() {
      var result;
      beforeEach(function() {
        result = pluck(1);
      });

      it("then result is `1`", function() {
        expect(result).to.equal(1);
      });
    });

    describe("with multiple arguments, input is `1` and the rest are all numbers", function() {
      var result;
      beforeEach(function() {
        result = pluck(1, 2, 3);
      });

      it("then result is just the input, `1`", function() {
        expect(result).to.equal(1);
      });
    });

    describe("with an input object and a string key that exists", function() {
      var result, input;
      beforeEach(function() {
        input = {
          "hello": "hello world!"
        };
        result = pluck(input, "hello");
      });

      it("then extracting the key `hello` returns `{'hello': hello world!}`", function() {
        expect(result).to.deep.equal(input);
      });
    });

    describe("with an input object a string key that does not exist", function() {
      var result, input;
      beforeEach(function() {
        input = {
          "hello": "hello world!"
        };
        result = pluck(input, "world");
      });

      it("then extracting the key `world` returns `{}`", function() {
        expect(result).to.be.empty;
      });
    });

    describe("with an input object and keys/values objects that exist", function() {
      var result, input;
      beforeEach(function() {
        input = {
          "country": "USA",
          "city": "Ann Arbor",
          "zipCode": 48103
        };
        result = pluck(input, {"country": "USA", "city": "Ann Arbor"});
      });

      it("then extracting the keys `country` and `city` returns the expected values", function() {
        expect(sinon.match({"country": "USA", "city": "Ann Arbor"}).test(result)).to.equal(true);
      });
    });

    describe("with an input object with two matching keys", function() {
      var result, input;
      beforeEach(function() {
        input = {
          "country": "USA",
          "city": "Ann Arbor",
          "zipCode": 48103
        };
        result = pluck(input, {"country": "USA", "city": "Ann Arbor 123"});
      });

      it("then the two existing keys generates an object with the two values", function() {
        expect(result).to.deep.equal({
          "country": "USA",
          "city": "Ann Arbor"
        });
      });
    });

    describe("with an input object and an array for two keys that exist", function() {
      var result, input;
      beforeEach(function() {
        input = {
          "country": "USA",
          "city": "Ann Arbor",
          "zipCode": 48103
        };
        result = pluck(input, ["country", "city"]);
      });

      it("then the two existing keys generates an object with the two values", function() {
        expect(result).to.deep.equal({
          "country": "USA",
          "city": "Ann Arbor"
        });
      });

      it("then the value with no matching key is never returned", function() {
        expect(result.zipCode).to.equal(undefined);
      });
    });

    describe("with an input object and an array for one key that exists and another keys that does not exist", function() {
      var result, input;
      beforeEach(function() {
        input = {
          "country": "USA",
          "city": "Ann Arbor",
          "zipCode": 48103
        };
        result = pluck(input, ["country", "test"]);
      });

      it("then the two existing keys generates an object with the two values", function() {
        expect(result).to.deep.equal({
          "country": "USA"
        });
      });

      it("then extracting the key `city` returns `undefined`", function() {
        expect(result.test).to.equal(undefined);
      });
    });

  });
});
