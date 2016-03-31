var types = require("dis-isa");
var arrayToObject = require("./arrayToObject");

/**
 * Method that removes key value pairs from the input object and returns the remaining data
 * in a new shallow copy of the input object.
 *
 * @param { object } input - Object to extract data from
 * @param { string | string[] | object } keys - Keys for the values to extract from the input
 *
 * @returns { object } Object with key value pairs of extracted data.
 */
function omit(input, keys) {
  if (!types.isPlainObject(input)) {
    return {};
  }

  if (!types.isArray(keys) && !types.isPlainObject(keys)) {
    keys = [keys];
  }

  if (types.isArray(keys)) {
    keys = arrayToObject(keys);
  }

  return Object
    .keys(input)
    .filter(function(key) {
      return !keys.hasOwnProperty(key);
    })
    .reduce(function(output, item) {
      output[item] = input[item];
      return output;
    }, {});
}

module.exports = omit;
