var pick = require("./pick");
var omit = require("./omit");
var extend = require("./extend");
var merge = require("./merge");
var identity = require("./identity");
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
  identity: identity,
  noop: noop,
  value: value,
  objectValue: objectValue,
  objectValues: objectValues,
  arrayToObject: arrayToObject
};
