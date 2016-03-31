var arrayToObject = require("src/arrayToObject");

describe("arrayToObject suite", function() {
  describe("When converting an array to an object", function() {

    describe("with no custom values", function() {
      var input, result;

      beforeEach(function() {
        input = ["us", "united"];
        result = arrayToObject(input);
      });

      it("then the object is properly created with default values of `true`", function() {
        expect(result).to.deep.equal({
          us: true,
          united: true
        });
      });
    });

    describe("with custom value of `rannn`", function() {
      var input, result;

      beforeEach(function() {
        input = ["us", "united"];
        result = arrayToObject(input, "rannnn");
      });

      it("then the object is properly created with default values of `true`", function() {
        expect(result).to.deep.equal({
          us: "rannnn",
          united: "rannnn"
        });
      });
    });

    describe("with custom of a function", function() {
      var stub, input, result;

      beforeEach(function() {
        stub = sinon.stub();
        stub.withArgs(1).returns("good");
        stub.withArgs(3.2).returns("another hit");

        input = [1, 3.2];
        result = arrayToObject(input, stub);
      });

      it("then the function for handling the first item is called", function() {
        sinon.assert.calledWith(stub, 1, 0, input);
      });

      it("then the function for handling the second item is called", function() {
        sinon.assert.calledWith(stub, 3.2, 1, input);
      });

      it("then the result contains the results from calling the function", function() {
        expect(result).to.deep.equal({
          "1": "good",
          "3.2": "another hit"
        });
      });
    });
  });
});
