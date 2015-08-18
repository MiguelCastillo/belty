/**
 * Copies all properties from sources into target object. This is a
 * shallow copy.
 *
 * @param {object} target - Object to copy properties to
 * @param {...} rest - The rest of the arguments are merged into target
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

module.exports = extend;
