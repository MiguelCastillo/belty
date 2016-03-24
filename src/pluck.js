var types = require('dis-isa');

/**
 * Method that extracts key value pairs from the input object.
 *
 * @param { object } input - Object to extract data from
 * @param { string | string[] | object } keys - Keys for the values to extract from the input
 *
 * @returns { object } Object with key value pairs of extracted data.
 */
function pluck(input, keys) {
  if (arguments.length !== 1) {
    if (types.isString(keys)) {
      keys = [keys];
    }

    if (types.isPlainObject(keys)) {
      keys = Object.keys(keys);
    }

    if (types.isArray(keys)) {
      return keys
        .filter(function(key) {
          return input.hasOwnProperty(key);
        })
        .reduce(function(output, item) {
          output[item] = input[item];
          return output;
        }, {});
    }
  }

  return input;
}

module.exports = pluck;
