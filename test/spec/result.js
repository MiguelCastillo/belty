var result = require("src/result");

describe("result Suite", function() {
  describe("when calling `result`", function() {
    describe("with an object as the input", function() {
      var output, input;
      beforeEach(function() {
        input = {};
        output = result(input);
      });

      it("then the output is the input", function() {
        expect(input).to.equal(output);
      });
    });

    describe("with a function as the input and no args", function() {
      var fn, output;
      beforeEach(function() {
        fn = sinon.stub();
        output = result(fn);
      });

      it("then the function is called", function() {
        sinon.assert.calledOnce(fn);
      });

      it("then the function is called with no arguments", function() {
        sinon.assert.calledWithExactly(fn);
      });

      it("then the function does not return anything", function() {
        expect(output).to.equal(undefined);
      });
    });

    describe("with a function as the input and an argument", function() {
      var fn, args, output;
      beforeEach(function() {
        args = [1, 2];
        fn = sinon.stub();
        output = result(fn, args);
      });

      it("then the function was called", function() {
        sinon.assert.calledOnce(fn);
      });

      it("then the function was called with `args`", function() {
        sinon.assert.calledWithExactly(fn, 1, 2);
      });

      it("then the function does not return anything", function() {
        expect(output).to.equal(undefined);
      });
    });

    describe("with a function as the input, an argument, and returns a value", function() {
      var fn, args, output, returnValue;
      beforeEach(function() {
        args = [1, 2, 3];
        returnValue = "return value";
        fn = sinon.stub().returns(returnValue);
        output = result(fn, args);
      });

      it("then the function was called", function() {
        sinon.assert.calledOnce(fn);
      });

      it("then the function was called with `args`", function() {
        sinon.assert.calledWithExactly(fn, 1, 2, 3);
      });

      it("then the function returns `return value`", function() {
        expect(output).to.equal(returnValue);
      });
    });
  });
});
