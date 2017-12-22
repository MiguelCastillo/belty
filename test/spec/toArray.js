var toArray = require("../../src/toArray");
var expect = require("chai").expect;

describe("toArray Test Suite", function() {
  var act, result, inputs;

  beforeEach(function() {
    act = function() {
      result = toArray.apply(null, inputs);
    };
  });

  describe("When there is no input", function() {
    beforeEach(function() {
      inputs = undefined;
      act();
    });

    it("then the result is an array", function() {
      expect(result).to.be.instanceof(Array);
    });

    it("then the result is empty", function() {
      expect(result).to.be.empty;
    });
  });

  describe("When the input is an array", function() {
    beforeEach(function() {
      inputs = [[1, 2, 3]];
      act();
    });

    it("then the result is the input", function() {
      expect(result).to.be.equal(inputs[0]);
    });
  });

  describe("When the input is an object", function() {
    beforeEach(function() {
      inputs = [{a: "First value", b: "Second value"}];
      act();
    });

    it("then the result is an array", function() {
      expect(result).to.be.instanceof(Array);
    });

    it("then the result has one item", function() {
      expect(result).to.have.lengthOf(1);
    });

    it("then the result contains the input object", function() {
      expect(result[0]).to.eql(inputs[0]);
    });
  });

  describe("When the input is one object and two arrays", function() {
    beforeEach(function() {
      inputs = [{a: "First value", b: "Second value"}, [{c: "Third value"}, {d: "Fourth value"}], [{e: "Fifth value"}, {f: "Sixth value"}]];
      act();
    });

    it("then the result is an array", function() {
      expect(result).to.be.instanceof(Array);
    });

    it("then the result has one item", function() {
      expect(result).to.have.lengthOf(5);
    });

    it("then the first item in result is the first input object", function() {
      expect(result[0]).to.eql(inputs[0]);
    });

    it("then the second item in result is the first item in the first input arrray", function() {
      expect(result[1]).to.eql(inputs[1][0]);
    });

    it("then the third item in result is the second item in the first input array", function() {
      expect(result[2]).to.eql(inputs[1][1]);
    });

    it("then the fourth item in result is the first item in the second input array", function() {
      expect(result[3]).to.eql(inputs[2][0]);
    });

    it("then the fifth item in result is the second item in the second input array", function() {
      expect(result[4]).to.eql(inputs[2][1]);
    });
  });
});
