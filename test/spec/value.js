var value = require("src/value");

describe("value Test Suite", function() {
  describe("when calling `value`", function() {
    describe("with an object as the input and no property to be read", function() {
      var output, input;
      beforeEach(function() {
        input = {};
        output = value(input);
      });

      it("then the output is `undefined`", function() {
        expect(output).to.equal(undefined);
      });
    });

    describe("with an object with a property `body` that is `1`", function() {
      var input, output;
      beforeEach(function() {
        input = {body: 1};
        output = value(input, "body");
      });

      it("then then result is `1`", function() {
        expect(output).to.equal(1);
      });
    });

    describe("with an object with a property `body` that is a function in the input", function() {
      var input, output;
      beforeEach(function() {
        input = {body: sinon.stub()};
        output = value(input, "body");
      });

      it("then the function is called", function() {
        sinon.assert.notCalled(input.body);
      });

      it("then the function does not return anything", function() {
        expect(output).to.equal(input.body);
      });
    });

    describe("with an object with nested objects", function() {
      var input, output, goodValue, returnValue, transform;

      beforeEach(function() {
        returnValue = "it should read this value";
        goodValue = "override value";
        transform = sinon.stub();
        transform.withArgs("override value").returns(returnValue);

        input = {
          "a":{
            "b": [{}, {
              "bad": "it should not read this value"
            }, {
              "good": goodValue
            }]
          }
        };
      });

      describe("and reading a nested value with a string keypath", function() {
        beforeEach(function() {
          output = value(input, "a.b[2].good", transform);
        });

        it("then the correct value is read from the nested keypath", function() {
          expect(output).to.equal(returnValue);
        });

        it("then the method in the input object to read the value was called with the corresponding arguments", function() {
          sinon.assert.calledWith(transform, goodValue, ["a", "b", "2", "good"], input);
        });
      });


      describe("and reading a nested value with an array keypath", function() {
        beforeEach(function() {
          output = value(input, ["a", "b", "2", "good"], transform);
        });

        it("then the correct value is read from the nested keypath", function() {
          expect(output).to.equal(returnValue);
        });

        it("then the method in the input object to read the value was called with the corresponding arguments", function() {
          sinon.assert.calledWith(transform, goodValue, ["a", "b", "2", "good"], input);
        });
      });
    });
  });
});
