var types = require('dis-isa');

/**
 * Gracefully handle generating an output from an input. The input can be
 * a function, in which case it is called and whatever is returned is
 * the ouput. Otherwise, the rest of the arguments are processed to
 * to figure out what needs to be returned.
 *
 * @param {*} input - If function, it is called and the result is returned.
 *  Otherwise the rest of the arguments are processed.
 * @param {*} args - Arguments to pass to input when it is a function.
 * @param {*} context - Context used when input is a function.
 *
 * @returns {*} If input is a function, then the result of calling it is
 *  returned. Otherwise input is returned
 */
function result(input, args, context) {
  if (types.isFunction(input)) {
    return input.apply(context, args||[]);
  }

  return input;
}

module.exports = result;
