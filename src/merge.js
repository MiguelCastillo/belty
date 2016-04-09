var types = require("dis-isa");

function doCopy(target, source) {
  for (var property in source) {
    if (!source.hasOwnProperty(property)) {
      continue;
    }

    if (types.isBuffer(source[property])) {
      target[property] = source[property];
    }
    else if (types.isPlainObject(source[property])) {
      target[property] = doCopy(target[property] || {}, source[property]);
    }
    else if (types.isArray(source[property])) {
      target[property] = doCopy(target[property] || [], source[property]);
    }
    else {
      target[property] = source[property];
    }
  }

  return target;
}

/**
 * Deep copy all properties from the input objects (sources) into the target object.
 * It merges objects and arrays into new structures from left to right overriding
 * simple properties that have already been set.
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
    target = doCopy(target, sources[i]);
  }

  return target;
}

module.exports = merge;
