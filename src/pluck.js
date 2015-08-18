var types = require('dis-isa');

/**
 * Method to extract data out of an Object.
 *
 * @param {*} input - Object to extract data from
 * @param {*} keys - Keys to extract data from input.
 *
 * @returns {*} If input is a function, then the result of calling it is
 *  returned. Otherwise args are processed to determine what is returned.
 *
 * If keys is a string, then it is used as is for extracting the value
 * out of input.
 *
 * If keys is an object, then all the keys and values are used for extracting
 * the values out of input.
 *
 * If keys is an array, then they are all used for extracting the values out
 * of input.
 */
function pluck(input, keys) {
  if (arguments.length !== 1) {
    if (types.isString(keys)) {
      return input[keys];
    }

    if (types.isArray(keys)) {
      return keys.reduce(function(output, item) {
        output[item] = input[item];
        return output;
      }, {});
    }

    if (types.isPlainObject(keys)) {
      return Object.keys(keys).reduce(function(output, item) {
        if (input.hasOwnProperty(item) && input[item] === keys[item]) {
          output[item] = input[item];
        }
        return output;
      }, {});
    }
  }

  return input;
}

module.exports = pluck;
