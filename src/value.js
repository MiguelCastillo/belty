var types = require("dis-isa");

/**
 * Method that uses the input to derive a return value.
 *
 * If the input is a function, then the function is called. If the function returns
 * a value, that value is then returned as the final result. Otherwise, if value is
 * *not* undefined, then that's returned as the final value. Otherwise, the default
 * value is returned.
 *
 * @param {*} input - input value to derived returned value from.
 * @param {array} args - Arguments to be passed into the input when it is a function.
 * @param {*} defaultValue - value to be returned in case the input is not defined.
 *
 * @returns {*} The derived value
 */
function value(input, args, context, defaultValue) {
  if (types.isFunction(input)) {
    input = input.apply(context, args || []);
  }

  return types.isUndefined(input) ? defaultValue : input;
}

module.exports = value;
