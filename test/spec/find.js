var find = require("../../src/find");
var expect = require("chai").expect;
var chanceFactory = require("chance");
var chance = chanceFactory();

describe("find Suite", function() {
  var act, criteria, input, result;

  beforeEach(function() {
    act = function() {
      result = find(input, criteria);
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

        it("then there the result is undefined", function() {
          expect(result).to.be.undefined;
        });
      });

      describe("and criteria has some properties", function() {
        beforeEach(function() {
          criteria = {
            prop1: chance.string()
          };
          act();
        });

        it("then there the result is undefined", function() {
          expect(result).to.be.undefined;
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

        it("then the result is the first item of the input", function() {
          expect(result).to.equal(input.item1);
        });
      });

      describe("and the criteria has properties that don't match", function() {
        beforeEach(function() {
          criteria = {
            prop2: chance.string()
          };

          act();
        });

        it("then the result is undefined", function() {
          expect(result).to.be.undefined;
        });
      });

      describe("and the criteria has one property that matches the first item in the input", function() {
        beforeEach(function() {
          criteria = {
            prop1: input.item1.prop1
          };

          act();
        });

        it("then the result has the found item", function() {
          expect(result).to.not.be.undefined;
        });

        it("then the item in the result is an item in the input", function() {
          expect(result).to.be.equal(input.item1);
        });
      });

      describe("and the criteria has one property that matches the second item in the input", function() {
        beforeEach(function() {
          criteria = {
            prop1: input.item2.prop1
          };

          act();
        });

        it("then the result has the found item", function() {
          expect(result).to.not.be.undefined;
        });

        it("then the item in the result is an item in the input", function() {
          expect(result).to.be.equal(input.item2);
        });
      });

      describe("and the criteria has one property that matches the third item in the input", function() {
        beforeEach(function() {
          criteria = {
            prop1: input.item3.prop1
          };

          act();
        });

        it("then the result has the found item", function() {
          expect(result).to.not.be.undefined;
        });

        it("then the item in the result is an item in the input", function() {
          expect(result).to.be.equal(input.item3);
        });
      });

      describe("and the criteria has one property that matches the first and third item in the input", function() {
        beforeEach(function() {
          criteria = {
            common: "test"
          };

          act();
        });

        it("then the result has the found item", function() {
          expect(result).to.not.be.undefined;
        });

        it("then the first item in the result is the first item in the input", function() {
          expect(result).to.be.equal(input.item1);
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
          expect(result).to.be.undefined;
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
          expect(result).to.be.undefined;
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

        it("then the result has the found item", function() {
          expect(result).to.not.be.undefined;
        });

        it("then the first item in the result is the first item in the input", function() {
          expect(result).to.be.equal(input[0]);
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
          expect(result).to.be.undefined;
        });
      });

      describe("and the criteria has one property that matches the first item in the input", function() {
        beforeEach(function() {
          criteria = {
            prop1: input[0].prop1
          };

          act();
        });

        it("then the result has the found item", function() {
          expect(result).to.not.be.undefined;
        });

        it("then the item in the result is the first item in the input", function() {
          expect(result).to.be.equal(input[0]);
        });
      });

      describe("and the criteria has one property that matches the second item in the input", function() {
        beforeEach(function() {
          criteria = {
            prop1: input[1].prop1
          };

          act();
        });

        it("then the result has the found item", function() {
          expect(result).to.not.be.undefined;
        });

        it("then the item in the result is the second item in the input", function() {
          expect(result).to.be.equal(input[1]);
        });
      });

      describe("and the criteria has one property that matches the third item in the input", function() {
        beforeEach(function() {
          criteria = {
            prop1: input[2].prop1
          };

          act();
        });

        it("then the result has the found item", function() {
          expect(result).to.not.be.undefined;
        });

        it("then the item in the result is the third item in the input", function() {
          expect(result).to.be.equal(input[2]);
        });
      });

      describe("and the criteria has one property that matches the first and third item in the input", function() {
        beforeEach(function() {
          criteria = {
            common: "test"
          };

          act();
        });

        it("then the result has the found item", function() {
          expect(result).to.not.be.undefined;
        });

        it("then the first item in the result is the first item in the input", function() {
          expect(result).to.be.equal(input[0]);
        });
      });
    });
  });
});
