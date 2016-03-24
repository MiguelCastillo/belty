var value = require("./value");
var splitKeypath = require("split-keypath");

/**
 * Extract values from an input object for a given keypath. This will call any
 * functions along the way of extracting the final value.
 *
 * @param {object} input - Object to read `property` from.
 * @param {string|number} keypath - keypath for the value in the object.
 *
 * @returns {*} The value for the corresponding keypath.
 */
function objectValue(input, keypath) {
  if (!keypath) {
    return;
  }

  return splitKeypath(keypath)
    .reduce(function(nested, key) {
      return value(nested[key], [nested[key], key, input]);
    }, input);
}

module.exports = objectValue;
