/**
 * Shallow copies all properties from the input objects (sources) into the target
 * object. Source objects are processed left to right overriding whatever values
 * already exist in the resulting.
 *
 * @param {object} target - Object to copy properties to
 * @param {...} source - The source objects to be merged into the target object
 *
 * @returns {object} Object with all source objects merged in.
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

module.exports = extend;
