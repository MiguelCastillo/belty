var types = require("dis-isa");
var isMatch = require("./isMatch");

/**
 * Returns an array that contains all the items for which calling the matcher function returns
 * true for when the matcher is a function. Or in the case when the matcher is not a function,
 * whatever isMatch returns true for using matcher as the matching criteria.
 *
 * @param { object | array } input - Collection of items to search for the first match from.
 * @param { object | array | string | number | function } matcher - If a function is provided,
 *  then that's called and any item for which that returns true to for is included in the
 *  result set. Otherwise, isMatch is used to deeply match object structures. Object that match
 *  the object structure are included in the result set.
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
