var types = require('dis-isa');

/**
 * Deep copy all properties from the input objects (sources) into the target object.
 * Properties are copied from left to right overriding whatever values that already
 * exist in the resulting object.
 *
 * @param {object} target - Object to copy properties to
 * @param {...} source - The source objects to be merged into the target object
 *
 * @returns {object} Object with all source objects merged in.
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

module.exports = merge;
