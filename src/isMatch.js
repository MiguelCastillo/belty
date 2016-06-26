var types = require("dis-isa");

/**
 * Recursively matches all the properties in the criteria against the input. Only if all data in
 * criteria is found in the input is the result true. Otherwise the result is false.
 *
 * @param { object | array | string | number } input - Data to be matched against
 * @param { object | array | string | number } criteria - Object shape to match against the input
 *
 * @returns { boolean } True is all data in criteria is in the input
 */
function isMatch(input, criteria) {
  if (input === criteria) {
    return true;
  }

  if (!input || !criteria) {
    return false;
  }

  if (types.isArray(input) || types.isObject(input)) {
    for (var prop in criteria) {
      if (!criteria.hasOwnProperty(prop)) {
        continue;
      }

      if (criteria[prop] !== input[prop]) {
        if (criteria[prop] && (types.isArray(criteria[prop]) || types.isObject(criteria[prop]))) {
          return isMatch(input[prop], criteria[prop]);
        }
        else {
          return false;
        }
      }
    }

    return true;
  }

  return false;
}

isMatch.withCriteria = function(criteria) {
  return function(item) {
    return isMatch(item, criteria);
  }
};

isMatch.withItem = function(item) {
  return function(criteria) {
    return isMatch(item, criteria);
  }
};

module.exports = isMatch;
