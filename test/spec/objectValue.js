var objectValue = require("src/objectValue");

describe("objectValue Suite", function() {
  describe("when calling `objectValue`", function() {
    describe("with an object as the input and no property to be read", function() {
      var output, input;
      beforeEach(function() {
        input = {};
        output = objectValue(input);
      });

      it("then the output is `undefined`", function() {
        expect(output).to.equal(undefined);
      });
    });

    describe("with an object with a property `body` that is `1`", function() {
      var input, output;
      beforeEach(function() {
        input = {body: 1};
        output = objectValue(input, "body");
      });

      it("then then result is `1`", function() {
        expect(output).to.equal(1);
      });
    });

    describe("with an object with a property `body` that is a function in the input", function() {
      var input, output;
      beforeEach(function() {
        input = {body: sinon.stub()};
        output = objectValue(input, "body");
      });

      it("then the function is called", function() {
        sinon.assert.calledOnce(input.body);
      });

      it("then the function is called with the corresponding arguments", function() {
        sinon.assert.calledWithExactly(input.body, input.body, "body", input);
      });

      it("then the function does not return anything", function() {
        expect(output).to.equal(undefined);
      });
    });

    describe("with an object with nested objects", function() {
      var input, output, goodStub, returnValue;

      beforeEach(function() {
        returnValue = "it should read this value";
        goodStub = sinon.stub().returns(returnValue);

        input = {
          "a":{
            "b": [{}, {
              "bad": "it should not read this value"
            }, {
              "good": goodStub
            }]
          }
        };

        output = objectValue(input, "a.b[2].good");
      });

      it("then the correct value is read from the nested keypath", function() {
        expect(output).to.equal(returnValue);
      });

      it("then the method in the input object to read the value was called once", function() {
        sinon.assert.calledOnce(goodStub);
      });

      it("then the method in the input object to read the value was called with the corresponding arguments", function() {
        sinon.assert.calledOnce(goodStub, goodStub, "good", input);
      });
    });
  });
});
