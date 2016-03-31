var identity = require("./identity");
var splitKeypath = require("split-keypath");
var types = require("dis-isa");

/**
 * Extract values from an input object for a given keypath. This will call any
 * functions along the way of extracting the final value.
 *
 * @param {object} input - Object to read `property` from.
 * @param {string|number|array} keypath - keypath for the value in the object.
 * @param {function?} transform - Function that takes the final value, the resolved keypath, and
 *  the collection. This is a chance for an external function to transform the result before
 *  it is returned.
 *
 * @returns {*} The value for the corresponding keypath.
 */
function objectValue(input, keypath, transform) {
  if (!keypath) {
    return;
  }

  if (types.isString(keypath)) {
    keypath = splitKeypath(keypath);
  }
  else if (!types.isArray(keypath)) {
    keypath = [keypath];
  }

  // Find value...
  var value = keypath.reduce(function(nested, key) {
    return nested[key];
  }, input);

  return (transform || identity)(value, keypath, input);
}

module.exports = objectValue;
