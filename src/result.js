var types = require('dis-isa');

/**
 * Gracefully handle generating an output from an input. The input is an object
 * and if the property in the object is a function, then the function is called
 * and the result is returned. Otherwise, the value from `input[property]` is returned.
 *
 * @param {object} input - Object to read `property` from.
 * @param {string|number} property - Property to read from the `input` object
 * @param {array} data - Data to be passed to the when value is a function.
 * @param {*} context - Context used when value is a function.
 *
 * @returns {*} result of calling the function or property from input.
 */
function result(input, property, data, context) {
  if (types.isFunction(input[property])) {
    return input[property].apply(context, data || []);
  }

  return input[property];
}

module.exports = result;
