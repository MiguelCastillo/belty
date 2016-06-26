var types = require("dis-isa");
var isMatch = require("./isMatch");

/**
 * Creates an array that contains all the items that match the provided
 * criteria.
 *
 * @param { object | array } input - Collection of items to search for the first match from.
 * @param { object | array | string | number | function } matcher - Object to match the shape
 *  of the items to pull from input. Alternatively, you can pass a function to customize which
 *  items to pull from input.
 *
 * @returns { array } Collection of items that matched the criteria
 */
function findAll(input, matcher) {
  var result = [];
  var cb = types.isFunction(matcher) ?
    matcher :
    isMatch.withCriteria(matcher);

  for (var item in input) {
    if (input.hasOwnProperty(item) && cb(input[item], item, input)) {
      result.push(input[item]);
    }
  }

  return result;
}

module.exports = findAll;
