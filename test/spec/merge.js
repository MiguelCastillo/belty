var merge = require("src/merge");
var date = new Date();

describe("merge Suite", function() {
  describe("when merging", function() {
    describe("no object", function() {
      var result;
      beforeEach(function() {
        result = merge();
      });

      it("then result is an object", function() {
        expect(result).to.be.an("object");
      });

      it("then result object has no properties - it's an empty object ", function() {
        expect(Object.keys(result).length).to.equal(0);
      });
    });

    describe("empty object", function() {
      var result, target;
      beforeEach(function() {
        target = {};
        result = merge(target);
      });

      it("then result is target", function() {
        expect(result).to.equal(target);
      });

      it("then result is an object", function() {
        expect(result).to.be.an("object");
      });

      it("then result has no properties - it's an empty object", function() {
        expect(Object.keys(result).length).to.equal(0);
      });
    });

    describe("two objects with the same property", function() {
      var result, target;
      beforeEach(function() {
        target = {};
        result = merge(target, {"one": "dont"}, {"two": "twotest", "one": "onetest"});
      });

      it("then result is target", function() {
        expect(result).to.equal(target);
      });

      it("then result is an object", function() {
        expect(result).to.be.an("object");
      });

      it("then result.one is 'ontest'", function() {
        expect(result.one).to.equal("onetest");
      });

      it("then result.two is 'twotest'", function() {
        expect(result.two).to.equal("twotest");
      });
    });

    describe("two objects with the same property of type `Array`, and then merging more data into the first result", function() {
      var result, target, defaults, source1, source2;
      beforeEach(function() {
        defaults = {
          packages : [{
            initial: "state"
          }, {
            foo: "zball"
          }]
        };

        source1 = {
          packages: [{
            location : "tests",
            main     : "main",
            name     : "js"
          }, {
            bar: "stool"
          }],
          date: (new Date())
        };

        source2 = {"one": ["onetest"]};
        target = merge({}, defaults, source1);
        result = merge(target, source2);
      });

      it("then result is target", function() {
        expect(result).to.equal(target);
      });

      it("then result is an object", function() {
        expect(result).to.be.an("object");
      });

      it("then defaults object has 2 package", function() {
        expect(defaults.packages.length).to.equal(2);
      });

      it("then defaults object does not have a date", function() {
        expect(defaults.date).to.equal(undefined);
      });

      it("then result.one is and Array", function() {
        expect(result.one).to.be.an("Array");
      });

      it("then result.one is NOT the same array as what is in the input", function() {
        expect(result.one).to.not.equal(source2.one);
      });

      it("then result.one has the same content as what is in the input", function() {
        expect(result.one).to.eql(source2.one);
      });

      it("then result has 2 packages", function() {
        expect(result.packages.length).to.equal(2);
      });

      it("then result's first package has different content than the input", function() {
        expect(result.packages[0]).to.not.eql(source1.packages[0]);
      });

      it("then result's first package is the aggregated data from all the inputs", function() {
        expect(result.packages[0]).to.eql({
          initial  : "state",
          location : "tests",
          main     : "main",
          name     : "js"
        });
      });

      it("then result's second package has different content than the input", function() {
        expect(result.packages[1]).to.not.eql(source1.packages[1]);
      });

      it("then results's second package has the aggregated data from all the inputs", function() {
        expect(result.packages[1]).to.eql({
          foo: "zball",
          bar: "stool"
        });
      });

      it("then result has a datte", function() {
        expect(result.date).to.be.a("Date");
      });
    });

    describe("two objects with one nested objects", function() {
      var result, target;
      beforeEach(function() {
        target = {};
        result = merge(target, {"one": "dont"}, {"two": "twotest", "one": "onetest", "with": {"object": "two deep"}});
      });

      it("then result is target", function() {
        expect(result).to.equal(target);
      });

      it("then result is an object", function() {
        expect(result).to.be.an("object");
      });

      it("then result has three properties", function() {
        expect(Object.keys(result).length).to.equal(3);
      });

      it("then result.with is an object", function() {
        expect(result.with).to.be.an("object");
      });

      it("then result.with has one property", function() {
        expect(Object.keys(result.with).length).to.equal(1);
      });

      it("then result.with.object is 'two deep'", function() {
        expect(result.with.object).to.equal("two deep");
      });

      it("then result.one is a string", function() {
        expect(result.one).to.be.a("string");
      });

      it("then result.one is 'onetest'", function() {
        expect(result.one).to.equal("onetest");
      });

      it("then result.two is a string", function() {
        expect(result.two).to.be.a("string");
      });

      it("then result.two is 'twotest'", function() {
        expect(target.two).to.equal("twotest");
      });
    });

    describe("two objects with two nested objects", function() {
      var result, target;
      beforeEach(function() {
        target = {};
        result = merge(target, {"one": "dont"}, {"two": "twotest", "one": "onetest", "with": {"object": "two deep", "noway": {"yes":"way"}}});
      });

      it("then result is an object", function() {
        expect(result).to.be.an("object");
      });

      it("then result has three properties", function() {
        expect(Object.keys(result).length).to.equal(3);
      });

      it("then result.one is 'onetest'", function() {
        expect(result.one).to.equal("onetest");
      });

      it("then result.two is 'twotest'", function() {
        expect(result.two).to.equal("twotest");
      });

      it("then result.with is an object", function() {
        expect(result.with).to.be.an("object");
      });

      it("then result.with has two properties", function() {
        expect(Object.keys(result.with).length).to.equal(2);
      });

      it("then result.with.object is a string", function() {
        expect(result.with.object).to.be.a("string");
      });

      it("then result.with.object is 'two deep'", function() {
        expect(result.with.object).to.equal("two deep");
      });

      it("then result.with.noway is an object", function() {
        expect(result.with.noway).to.be.an("object");
      });

      it("then result.with.noway has 1 property", function() {
        expect(Object.keys(result.with.noway).length).to.equal(1);
      });

      it("then result.with.noway.yes is a string", function() {
        expect(result.with.noway.yes).to.be.a("string");
      });

      it("then result.with.noway.yes is 'way'", function() {
        expect(result.with.noway.yes).to.equal("way");
      });
    });

    describe("two objects with three deep nested objects", function() {
      var obj1, obj2, obj3, obj4, obj5, obj6, obj7, target;
      beforeEach(function() {
        obj1 = {"modules": {"no": {"item": "hello"}, "yes": {"item": date}}};
        obj2 = {"modules": {"no": {"item": "status1"}}};
        obj3 = {"modules": {"no": {"item": "overriden1"}}};
        obj4 = {"modules": {"no": {"item": "overriden2"}}};
        obj5 = {"modules": {"no": {"item": "overriden3"}}};
        obj6 = {"modules": {"no": {"item": "overriden4"}}};
        obj7 = {"modules": {"no": {"item": "overriden5"}}};
        target = merge({}, obj1, obj2, obj3, obj4, obj5, obj6, obj7);
      });

      it("then original obj1.no is an object", function() {
        expect(obj1.modules.no).to.be.an("object");
      });

      it("then original obj1.no.item is a string", function() {
        expect(obj1.modules.no.item).to.be.an("string");
      });

      it("then original obj1.no.item is 'hello'", function() {
        expect(obj1.modules.no.item).to.equal("hello");
      });

      it("then originl obj1.yes is an object", function() {
        expect(obj1.modules.yes).to.be.an("object");
      });

      it("then originl obj1.yes.item is a date", function() {
        expect(obj1.modules.yes.item).to.be.a("date");
      });

      it("then originl obj1.yes.item is " + date, function() {
        expect(obj1.modules.yes.item).to.equal(date);
      });

      it("then original obj2.no is an object", function() {
        expect(obj2.modules.no).to.be.an("object");
      });

      it("then original obj2.no.item is a string", function() {
        expect(obj2.modules.no.item).to.be.a("string");
      });

      it("then original obj2.no.item is 'status1'", function() {
        expect(obj2.modules.no.item).to.equal("status1");
      });

      it("then original obj3.no is an object", function() {
        expect(obj3.modules.no).to.be.an("object");
      });

      it("then original obj3.no.item is a string", function() {
        expect(obj3.modules.no.item).to.be.a("string");
      });

      it("then original obj3.no.item is 'overriden'", function() {
        expect(obj3.modules.no.item).to.equal("overriden1");
      });

      it("then original obj4.no is an object", function() {
        expect(obj4.modules.no).to.be.an("object");
      });

      it("then original obj4.no.item is a string", function() {
        expect(obj4.modules.no.item).to.be.a("string");
      });

      it("then original obj4.no.item is 'overriden'", function() {
        expect(obj4.modules.no.item).to.equal("overriden2");
      });

      it("then original obj5.no is an object", function() {
        expect(obj5.modules.no).to.be.an("object");
      });

      it("then original obj5.no.item is a string", function() {
        expect(obj5.modules.no.item).to.be.a("string");
      });

      it("then original obj5.no.item is 'overriden'", function() {
        expect(obj5.modules.no.item).to.equal("overriden3");
      });

      it("then original obj6.no is an object", function() {
        expect(obj6.modules.no).to.be.an("object");
      });

      it("then original obj6.no.item is a string", function() {
        expect(obj6.modules.no.item).to.be.a("string");
      });

      it("then original obj6.no.item is 'overriden'", function() {
        expect(obj6.modules.no.item).to.equal("overriden4");
      });

      it("then original obj7.no is an object", function() {
        expect(obj7.modules.no).to.be.an("object");
      });

      it("then original obj7.no.item is a string", function() {
        expect(obj7.modules.no.item).to.be.a("string");
      });

      it("then original obj7.no.item is 'overriden'", function() {
        expect(obj7.modules.no.item).to.equal("overriden5");
      });

      it("then result modules is an object", function() {
        expect(target.modules).to.be.an("object");
      });

      it("then result modules.no is an object", function() {
        expect(target.modules.no).to.be.an("object");
      });

      it("then result modules.no.item is overriden", function() {
        expect(target.modules.no.item).to.equal("overriden5");
      });

      it("then result module.yes is an object", function() {
        expect(target.modules.yes).to.be.an("object");
      });

      it("then result module.yes.item is a Date", function() {
        expect(target.modules.yes.item).to.be.a("date");
      });

      it("then result module.yes.item is date", function() {
        expect(target.modules.yes.item).to.equal(date);
      });
    });

    describe("with arrays that override already exising entries", function() {
      var result, source1, source2;

      beforeEach(function() {
        source1 = {
          data: [1, 2, 3],
          misc: "random"
        };

        source2 = {
          data: [4, 5]
        };

        result = merge({}, source1, source2);
      });

      it("then the result has the aggregated entries from the corresponding input arrays", function() {
        expect(result.data).to.eql([4, 5, 3]);
      });

      it("then the result has the corresponding value from the input", function() {
        expect(result.misc).to.equal("random");
      });
    });

    describe("with a custom transform that concats arrays", function() {
      var result, source1, source2;

      beforeEach(function() {
        source1 = {
          data: [1, 2, 3],
          misc: "random"
        };

        source2 = {
          data: [4, 5, 6]
        };

        result = merge({}, transform, source1, source2);

        function transform(current, next) {
          if (Array.isArray(next.data)) {
            return {
              data: current.data ? current.data.concat(next.data) : next.data
            };
          }

          return next;
        }
      });

      it("then the result has the concatinated array from all sources", function() {
        expect(result.data).to.eql([1, 2, 3, 4, 5, 6]);
      });
    });
  });
});
