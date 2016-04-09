var indentity = require("./identity");
var types = require("dis-isa");

/**
 * Converts array to a literal object with the array values used as keys. So this is
 * to be used for converting an array of string/number entries to a literal object with
 * those values as the keys for the new object.
 *
 * @param { array } input - Items to convert to a map
 * @param { *? } val - Can be a function, in which case it is called with the currect
 *  item in the array being processed in order to derive the value for the map entry.
 *  Otherwise the value will be the same as the value in the array, which will also
 *  be the key.
 *
 * @returns { object } Object will all the array values as keys and the derived
 *  values
 */
function arrayToObject(input, val) {
  var defaultValue = true;
  if (arguments.length !== 1) {
    if (!types.isFunction(val)) {
      defaultValue = val;
      val = false;
    }
  }

  return input.reduce(function(container, value, key) {
    container[value] = val ? val(value, key, input) : defaultValue;
    return container;
  }, {});
}

module.exports = arrayToObject;
