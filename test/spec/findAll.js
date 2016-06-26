var findAll = require("../../src/findAll");
var chanceFactory = require("chance");
var chance = chanceFactory();

describe("findAll Suite", function() {
  var act, criteria, input, result;

  beforeEach(function() {
    act = function() {
      result = findAll(input, criteria);
    };
  });

  describe("When the input is an object", function() {
    describe("that is empty", function() {
      beforeEach(function() {
        input = {};
      });

      describe("and criteria is empty", function() {
        beforeEach(function() {
          criteria = {};
          act();
        });

        it("then there the result is empty", function() {
          expect(result).to.be.empty;
        });
      });

      describe("and criteria has some properties", function() {
        beforeEach(function() {
          criteria = {
            prop1: chance.string()
          };
          act();
        });

        it("then there the result is empty", function() {
          expect(result).to.be.empty;
        });
      });
    });

    describe("that has multiple entries", function() {
      beforeEach(function() {
        input = {
          item1: {
            prop1: chance.string(),
            common: "test"
          },
          item2: {
            prop1: chance.string()
          },
          item3: {
            prop1: chance.string(),
            common: "test"
          }
        };
      });

      describe("and the criteria is empty", function() {
        beforeEach(function() {
          criteria = {};
          act();
        });

        it("then the result has three items", function() {
          expect(result).to.have.lengthOf(3);
        });

        it("then the first item in the result is the same item in the input", function() {
          expect(result[0]).to.be.equal(input.item1);
        });

        it("then the second item in the result is the same item in the input", function() {
          expect(result[1]).to.be.equal(input.item2);
        });

        it("then the third item in the result is the same item in the input", function() {
          expect(result[2]).to.be.equal(input.item3);
        });
      });

      describe("and the criteria has properties that don't match", function() {
        beforeEach(function() {
          criteria = {
            prop2: chance.string()
          };

          act();
        });

        it("then the result is empty", function() {
          expect(result).to.be.empty;
        });
      });

      describe("and the criteria has one property that matches the first item in the input", function() {
        beforeEach(function() {
          criteria = {
            prop1: input.item1.prop1
          };

          act();
        });

        it("then the result has one item", function() {
          expect(result).to.have.lengthOf(1);
        });

        it("then the item in the result is an item in the input", function() {
          expect(result[0]).to.be.equal(input.item1);
        });
      });

      describe("and the criteria has one property that matches the second item in the input", function() {
        beforeEach(function() {
          criteria = {
            prop1: input.item2.prop1
          };

          act();
        });

        it("then the result has one item", function() {
          expect(result).to.have.lengthOf(1);
        });

        it("then the item in the result is an item in the input", function() {
          expect(result[0]).to.be.equal(input.item2);
        });
      });

      describe("and the criteria has one property that matches the third item in the input", function() {
        beforeEach(function() {
          criteria = {
            prop1: input.item3.prop1
          };

          act();
        });

        it("then the result has one item", function() {
          expect(result).to.have.lengthOf(1);
        });

        it("then the item in the result is an item in the input", function() {
          expect(result[0]).to.be.equal(input.item3);
        });
      });

      describe("and the criteria has one property that matches the first and third item in the input", function() {
        beforeEach(function() {
          criteria = {
            common: "test"
          };

          act();
        });

        it("then the result has one item", function() {
          expect(result).to.have.lengthOf(2);
        });

        it("then the first item in the result is an item in the input", function() {
          expect(result[0]).to.be.equal(input.item1);
        });

        it("then the second item in the result is an item in the input", function() {
          expect(result[1]).to.be.equal(input.item3);
        });
      });
    });
  });

  describe("When the input is an array", function() {
    describe("that is empty", function() {
      beforeEach(function() {
        input = [];
      });

      describe("and the criteria is empty", function() {
        beforeEach(function() {
          criteria = {};
          act();
        });

        it("then result is empty", function() {
          expect(result).to.be.empty;
        });
      });

      describe("and the criteria has random data", function() {
        beforeEach(function() {
          criteria = {
            prop1: 1
          };

          act();
        });

        it("then the result is empty", function() {
          expect(result).to.be.empty;
        });
      });
    });

    describe("that has multiple entries", function() {
      beforeEach(function() {
        input = [{
          prop1: chance.string(),
          common: "test"
        }, {
          prop1: chance.string()
        }, {
          prop1: chance.string(),
          common: "test"
        }];
      });

      describe("and the criteria is empty", function() {
        beforeEach(function() {
          criteria = {};
          act();
        });

        it("then the result has three items", function() {
          expect(result).to.have.lengthOf(3);
        });

        it("then the first item in the result is the same item in the input", function() {
          expect(result[0]).to.be.equal(input[0]);
        });

        it("then the second item in the result is the same item in the input", function() {
          expect(result[1]).to.be.equal(input[1]);
        });

        it("then the third item in the result is the same item in the input", function() {
          expect(result[2]).to.be.equal(input[2]);
        });
      });

      describe("and the criteria has properties that don't match", function() {
        beforeEach(function() {
          criteria = {
            prop2: chance.string()
          };

          act();
        });

        it("then the result is empty", function() {
          expect(result).to.be.empty;
        });
      });

      describe("and the criteria has one property that matches the first item in the input", function() {
        beforeEach(function() {
          criteria = {
            prop1: input[0].prop1
          };

          act();
        });

        it("then the result has one item", function() {
          expect(result).to.have.lengthOf(1);
        });

        it("then the item in the result is an item in the input", function() {
          expect(result[0]).to.be.equal(input[0]);
        });
      });

      describe("and the criteria has one property that matches the second item in the input", function() {
        beforeEach(function() {
          criteria = {
            prop1: input[1].prop1
          };

          act();
        });

        it("then the result has one item", function() {
          expect(result).to.have.lengthOf(1);
        });

        it("then the item in the result is an item in the input", function() {
          expect(result[0]).to.be.equal(input[1]);
        });
      });

      describe("and the criteria has one property that matches the third item in the input", function() {
        beforeEach(function() {
          criteria = {
            prop1: input[2].prop1
          };

          act();
        });

        it("then the result has one item", function() {
          expect(result).to.have.lengthOf(1);
        });

        it("then the item in the result is an item in the input", function() {
          expect(result[0]).to.be.equal(input[2]);
        });
      });

      describe("and the criteria has one property that matches the first and third item in the input", function() {
        beforeEach(function() {
          criteria = {
            common: "test"
          };

          act();
        });

        it("then the result has one item", function() {
          expect(result).to.have.lengthOf(2);
        });

        it("then the first item in the result is an item in the input", function() {
          expect(result[0]).to.be.equal(input[0]);
        });

        it("then the second item in the result is an item in the input", function() {
          expect(result[1]).to.be.equal(input[2]);
        });
      });
    });
  });
});
