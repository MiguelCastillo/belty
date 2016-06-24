var isMatch = require("../../src/isMatch");
var chanceFactory = require("chance");
var chance = chanceFactory();

describe("isMatch Suite", function() {
  var criteria, input, act, result;

  beforeEach(function() {
    act = function() {
      result = isMatch(input, criteria);
    };
  });

  describe("when the input and the criteria are both integers", function() {
    describe("that are the same", function() {
      beforeEach(function() {
        input = 2;
        criteria = 2;
        act();
      });

      it("then criteria is a match", function() {
        expect(result).to.be.true;
      });
    });

    describe("that are not the same", function() {
      beforeEach(function() {
        input = 2;
        criteria = 3;
        act();
      });

      it("then the criteria is not a match", function() {
        expect(result).to.be.false;
      });
    });
  });

  describe("when the input is null and the criteria is an object", function() {
    beforeEach(function() {
      input = null;
      criteria = {};
      act();
    });

    it("then the criteria is not a match", function() {
      expect(result).to.be.false;
    });
  });

  describe("when the input and the criteria are both objects", function() {
    describe("and the input and criteria are both empty objects", function() {
      beforeEach(function() {
        input = {};
        criteria = {};
        act();
      });

      it("then the criteria is a match", function() {
        expect(result).to.be.true;
      });

    });

    describe("and the input has a few flat properties", function() {
      beforeEach(function() {
        input = {
          prop1: chance.string(),
          prop2: chance.string(),
          prop3: chance.string()
        };
      });

      describe("and the criteria is empty", function() {
        beforeEach(function() {
          criteria = {};
          act();
        });

        it("then the criteria is a match", function() {
          expect(result).to.be.true;
        });
      });

      describe("and the criteria has one property whose does not match", function() {
        beforeEach(function() {
          criteria = {
            prop1: chance.string()
          };

          act();
        });

        it("then the criteria is not a match", function() {
          expect(result).to.be.false;
        });
      });

      describe("and the criteria has one property that does not exist in the input", function() {
        beforeEach(function() {
          criteria = {
            prop4: chance.string()
          };

          act();
        });

        it("then the criteria is not a match", function() {
          expect(result).to.be.false;
        });
      });

      describe("and the criteria has one property that does match", function() {
        beforeEach(function() {
          criteria = {
            prop1: input.prop1
          };

          act();
        });

        it("then the criteria is a match", function() {
          expect(result).to.be.true;
        });
      });
    });

    describe("and the input is a nested structure with one array and a map", function() {
      beforeEach(function() {
        input = {
          prop1: chance.string(),
          prop2: {
            "prop2--1": chance.string(),
            "prop2--2": {
              "prop2--2--1": ["a"],
              "prop2--2--2": {
                "prop2--2--2--1": chance.string()
              }
            }
          }
        };
      });

      describe("and the criteria has a top level property", function() {
        beforeEach(function() {
          criteria = {
            prop1: input.prop1
          };

          act();
        });

        it("then the criteria is a match", function() {
          expect(result).to.be.true;
        });
      });

      describe("and the criteria has a nested map that matches", function() {
        beforeEach(function() {
          criteria = {
            prop2: {
              "prop2--1": input.prop2["prop2--1"]
            }
          };

          act();
        });

        it("then the criteria is a match", function() {
          expect(result).to.be.true;
        });
      });

      describe("and the criteria has a nested map that does not match", function() {
        beforeEach(function() {
          criteria = {
            prop2: {
              "prop2--1": chance.string()
            }
          };

          act();
        });

        it("then the criteria is not a match", function() {
          expect(result).to.be.false;
        });
      });

      describe("and the criteria has a nested array that matches", function() {
        beforeEach(function() {
          criteria = {
            prop2: {
              "prop2--2": {
                "prop2--2--1": ["a"]
              }
            }
          };

          act();
        });

        it("then the criteria is a match", function() {
          expect(result).to.be.true;
        });
      });

      describe("and the criteria has a nested array that does not match", function() {
        beforeEach(function() {
          criteria = {
            prop2: {
              "prop2--2": {
                "prop2--2--1": ["b"]
              }
            }
          };

          act();
        });

        it("then the criteria is not a match", function() {
          expect(result).to.be.false;
        });
      });

      describe("and the criteria has a nested array with two items and one does not match", function() {
        beforeEach(function() {
          criteria = {
            prop2: {
              "prop2--2": {
                "prop2--2--1": ["a", "b"]
              }
            }
          };

          act();
        });

        it("then the criteria is not a match", function() {
          expect(result).to.be.false;
        });
      });

    });
  });
});

