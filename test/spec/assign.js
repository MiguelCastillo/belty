var assign = require("src/assign");

describe("extend Suite", function() {
  describe("when `extend` into an empty target object", function() {
    describe("no object", function() {
      var result;
      beforeEach(function() {
        result = assign();
      });

      it("then result is an object", function() {
        expect(result).to.be.an("object");
      });

      it("then result object is empty has no properties - it's an empty object", function() {
        expect(Object.keys(result).length).to.equal(0);
      });
    });

    describe("empty object", function() {
      var result, target;
      beforeEach(function() {
        target = {};
        result = assign(target);
      });

      it("then result and target are the same object", function() {
        expect(result).to.equal(target);
      });

      it("then result is an object", function() {
        expect(result).to.be.an("object");
      });

      it("then result object has no proeprties - it's an empty object", function() {
        expect(Object.keys(result).length).to.equal(0);
      });
    });

    describe("three objects", function() {
      describe("when all object define the same property", function() {
        var result, target;
        beforeEach(function() {
          target = {};
          result = assign(target, {"one": "dont"}, {"two": "twotest", "one": "onetest"}, {"two": "twotest", "one": "twotest"});
        });

        it("then result and target are the same object", function() {
          expect(result).to.equal(target);
        });

        it("then result is an object", function() {
          expect(result).to.be.an("object");
        });

        it("then result.one is 'twotest'", function() {
          expect(result.one).to.equal("twotest");
        });

        it("then result.two is 'twotest'", function() {
          expect(result.two).to.equal("twotest");
        });
      });
    });
  });


  describe("when `extend` into a non empty target object", function() {
    describe("an empty object", function() {
      var result;
      beforeEach(function() {
        result = assign({"one": "dont"}, {"one": "do", "two": "it"});
      });

      it("then result is an object", function() {
        expect(result).to.be.an("object");
      });

      it("then result has two properties", function() {
        expect(Object.keys(result).length).to.equal(2);
      });
    });

    describe("two different objects with property 'one' in all of them", function() {
      var result;
      beforeEach(function() {
        result = assign({"one": "dont"}, {"two": "twotest", "one": "onetest"}, {"two": "twotest", "one": "twotest"});
      });

      it("result is an object", function() {
        expect(result).to.be.an("object");
      });

      it("result object has two properties", function() {
        expect(Object.keys(result).length).to.equal(2);
      });

      it("result.one is twotest", function() {
        expect(result.one).to.equal("twotest");
      });

      it("result.two is twotest", function() {
        expect(result.two).to.equal("twotest");
      });
    });
  });
});
