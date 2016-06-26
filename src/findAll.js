var types = require("dis-isa");
var isMatch = require("./isMatch");

/**
 * Creates an array that contains all the items that match the provided
 * criteria.
 *
 * @param { object | array } input - Collection to extract matching items from.
 * @param { object | array | string | number | function } matcher - Object to
 *  match the shape of items in input. Alternatively, you can pass a function to
 *  customize which items in input should be included in the result set.
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
