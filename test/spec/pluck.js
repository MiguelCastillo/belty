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

      it("then extracting the key `hello` returns `hello world!`", function() {
        expect(result).to.equal(input.hello);
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

      it("then extracting the key `world` returns `undefined`", function() {
        expect(result).to.equal(undefined);
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

    describe("with an input object and a key/value object that exist and a key/value object that does not exist", function() {
      var result, input;
      beforeEach(function() {
        input = {
          "country": "USA",
          "city": "Ann Arbor",
          "zipCode": 48103
        };
        result = pluck(input, {"country": "USA", "city": "Ann Arbor 123"});
      });

      it("then extracting the key `country` returns `USA`", function() {
        expect(result.country).to.equal(input.country);
      });

      it("then extracting the key `city` returns `undefined`", function() {
        expect(result.city).to.equal(undefined);
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

      it("then extracting the key `country` returns `USA`", function() {
        expect(result.country).to.equal(input.country);
      });

      it("then extracting the key `city` returns `Ann Arbor`", function() {
        expect(result.city).to.equal(input.city);
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

      it("then extracting the key `country` returns `USA`", function() {
        expect(result.country).to.equal(input.country);
      });

      it("then extracting the key `city` returns `Ann Arbor`", function() {
        expect(result.test).to.equal(undefined);
      });
    });

  });
});
