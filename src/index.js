var pick = require("./pick");
var omit = require("./omit");
var extend = require("./extend");
var merge = require("./merge");
var findAll = require("./findAll");
var identity = require("./identity");
var isMatch = require("./isMatch");
var noop = require("./noop");
var objectValue = require("./objectValue");
var objectValues = require("./objectValues");
var arrayToObject = require("./arrayToObject");
var value = require("./value");

module.exports = {
  result: value,
  pluck: pick,
  pick: pick,
  omit: omit,
  extend: extend,
  merge: merge,
  findAll: findAll,
  identity: identity,
  isMatch: isMatch,
  noop: noop,
  value: value,
  objectValue: objectValue,
  objectValues: objectValues,
  arrayToObject: arrayToObject
};
