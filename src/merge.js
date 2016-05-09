var types = require("dis-isa");

function baseTransform(t, s) { return s; };

function clone(target, source) {
  for (var key in source) {
    if (!source.hasOwnProperty(key)) {
      continue;
    }

    if (types.isBuffer(source[key])) {
      target[key] = source[key];
    }
    else if (types.isPlainObject(source[key])) {
      target[key] = target[key] || {};
      target[key] = clone(target[key], source[key]);
    }
    else if (types.isArray(source[key])) {
      target[key] = target[key] || [];
      target[key] = clone(target[key], source[key]);
    }
    else {
      target[key] = source[key];
    }
  }

  return target;
}


/**
 * Deep copy all properties from the input objects (sources) into the target object.
 * It merges objects and arrays into new structures from left to right overriding
 * already set properties.
 *
 * @param {object} target - Object to copy properties to
 * @param {function} transform - Transform function called with current and next value, as well
 *  as the key in order to generate the final value for the particular object entry. The transform
 *  is only called with top level objects currently being processed.
 * @param {...object} sources - The list of source objects to be merged into the target object
 *
 * @returns {object} Object with all source objects merged in.
 *
 * @example
 *
 * // The result of this is an object with the array entries concatinated
 * // and the exapnded out object property as generated by the transform
 * // method.
 * // {
 * //   data: [1, 2, 3, 4, 5, 6],
 * //   misc: {
 * //     expanded: "modded"
 * //   }
 * // }
 *
 *  var source1 = {
 *    data: [1, 2, 3],
 *    misc: "random"
 *  };
 *
 *  source2 = {
 *    data: [4, 5, 6]
 *  };
 *
 *  result = merge({}, transform, source1, source2);
 *
 * function transform(current, next) {
 *   if (Array.isArray(next.data)) {
 *     return {
 *       data: current.data ? current.data.concat(next.data) : next.data
 *     };
 *   }
 *
 *   return next;
 * }
 */
function merge(target, transform) {
  target = target || {};
  var sources;

  if (types.isFunction(transform)) {
    sources = Array.prototype.slice.call(arguments, 2);
  }
  else {
    sources = Array.prototype.slice.call(arguments, 1);
    transform = baseTransform;
  }

  // Allow `n` params to be passed in to extend this object
  for (var i = 0, length  = sources.length; i < length; i++) {
    clone(target, transform(target, sources[i]));
  }

  return target;
}

module.exports = merge;
