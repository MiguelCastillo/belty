var types = require('dis-isa');

/**
 * Deep copy all properties into target object.
 *
 * @param {object} target - Object to copy properties to
 * @param {...} rest - The rest of the arguments are deeply merged into target
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

module.exports = merge;
