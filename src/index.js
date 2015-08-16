var types = require('types');

/**
 * Noop method. You can pass in an argument and it will be returned as is.
 *
 * @param {*} arg - Argument to be returned. This is completely optional
 * @returns {*} This returns whatever is passed in.
 */
function noop(arg) {
  return arg;
}

/**
 * Gracefully handle generating an output from an input. The input can be
 * a function, in which case it is called and whatever is returned is
 * the ouput. Otherwise, the rest of the arguments are processed to
 * to figure out what needs to be returned.
 *
 * If args is a string, then it is used as a key for extracting the value
 * out of input. The value is returned.
 *
 * If args is an object, then all the keys in args are used for extracting
 * the values out of input. An object is created and all the values are
 * aggregated.
 *
 * If args is an array, then all the values in it are used for extracting
 * the values out of input. An object is created and all the values are
 * aggregated.
 *
 * @param {*} input - If function, it is called and the result is returned.
 *  Otherwise the rest of the arguments are processed.
 * @param {*} args - Arguments to pass to input when it is a function.
 * @param {*} context - Context used when input is a function.
 *
 * @returns {*} If input is a function, then the result of calling it is
 *  returned. Otherwise args are processed to determine what is returned.
 */
function result(input, args, context) {
  if (types.isFunction(input)) {
    return input.apply(context, args||[]);
  }

  if (arguments.length !== 1) {
    if (types.isString(args)) {
      return input[args];
    }

    if (types.isArray(args)) {
      return args.reduce(function(output, item) {
        output[item] = input[item];
        return output;
      }, {});
    }

    if (types.isPlainObject(args)) {
      return Object.keys(args).reduce(function(output, item) {
        output[item] = input[item];
        return output;
      }, {});
    }
  }

  return input;
}

/**
 * Copies all properties from sources into target object. This is a
 * shallow copy.
 *
 * @param {object} target - Object to copy properties to
 * @param {...} rest - The rest of the arguements are merged into target
 *
 * @returns {object} Object with all arguments merged in.
 */
function extend(target) {
  var source, length, i;
  target = target || {};

  // Allow n params to be passed in to extend this object
  for (i = 1, length  = arguments.length; i < length; i++) {
    source = arguments[i];
    for (var property in source) {
      if (source.hasOwnProperty(property)) {
        target[property] = source[property];
      }
    }
  }

  return target;
}

/**
 * Deep copy all properties into target object.
 *
 * @param {object} target - Object to copy properties to
 * @param {...} rest - The rest of the arguements are deeply merged into target
 *
 * @returns {object} Object with all arguments merged in.
 */
function merge(target) {
  var source, length, i;
  var sources = arguments;
  target = target || {};

  // Allow `n` params to be passed in to extend this object
  for (i = 1, length  = sources.length; i < length; i++) {
    source = sources[i];
    for (var property in source) {
      if (!source.hasOwnProperty(property)) {
        continue;
      }

      if (types.isPlainObject(source[property])) {
        target[property] = merge(target[property], source[property]);
      }
      else {
        target[property] = source[property];
      }
    }
  }

  return target;
}

module.exports = {
  noop: noop,
  result: result,
  extend: extend,
  merge: merge
};
