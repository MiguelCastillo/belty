var result = require("src/result");

describe("result Suite", function() {
  describe("when calling `result`", function() {
    describe("with an object as the input and no property to be read", function() {
      var output, input;
      beforeEach(function() {
        input = {};
        output = result(input);
      });

      it("then the output is `undefined`", function() {
        expect(output).to.equal(undefined);
      });
    });

    describe("with an object with a property `body` that is `1`", function() {
      var input, output;
      beforeEach(function() {
        input = {body: 1};
        output = result(input, "body");
      });

      it("then then result is `1`", function() {
        expect(output).to.equal(1);
      });
    });

    describe("with an object with a property `body` that is a function in the input", function() {
      var input, output;
      beforeEach(function() {
        input = {body: sinon.stub()};
        output = result(input, "body");
      });

      it("then the function is called", function() {
        sinon.assert.calledOnce(input.body);
      });

      it("then the function is called with no arguments", function() {
        sinon.assert.calledWithExactly(input.body);
      });

      it("then the function does not return anything", function() {
        expect(output).to.equal(undefined);
      });
    });

    describe("with an object with a property `body` that is a function and has arguments", function() {
      var input, args, output;
      beforeEach(function() {
        args = [1, 2];
        input = {body: sinon.stub()};
        output = result(input, "body", args);
      });

      it("then the function was called", function() {
        sinon.assert.calledOnce(input.body);
      });

      it("then the function was called with `args`", function() {
        sinon.assert.calledWithExactly(input.body, 1, 2);
      });

      it("then the function does not return anything", function() {
        expect(output).to.equal(undefined);
      });
    });

    describe("with an object with property `body` that is a function as the input, an argument, and returns a value", function() {
      var input, args, output, returnValue;
      beforeEach(function() {
        args = [1, 2, 3];
        returnValue = "return value";
        input = {body: sinon.stub().returns(returnValue)};
        output = result(input, "body", args);
      });

      it("then the function was called", function() {
        sinon.assert.calledOnce(input.body);
      });

      it("then the function was called with `args`", function() {
        sinon.assert.calledWithExactly(input.body, 1, 2, 3);
      });

      it("then the function returns `return value`", function() {
        expect(output).to.equal(returnValue);
      });
    });
  });
});
