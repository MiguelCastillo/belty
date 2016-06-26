var types = require("dis-isa");
var isMatch = require("./isMatch");

/**
 * Returns an array with all the items for which the predicate function returns true for when
 * the predicate is a function. Or in the case when the predicate is not a function, whatever
 * isMatch returns true for using predicate as the matching criteria.
 *
 * Predicate functions are called with item, index, and original collection.
 *
 * @param { object | array } input - Collection of items to search for the first match from.
 * @param { object | array | string | number | function } predicate - If a function is provided,
 *  then that's called and any item for which that returns true to for is included in the
 *  result set. Otherwise, isMatch is used to deeply match object structures. Object that match
 *  the object structure are included in the result set.
 *
 * @returns { array } Collection of items that matched the criteria
 */
function findAll(input, predicate) {
  var result = [];
  var cb = types.isFunction(predicate) ?
    predicate :
    isMatch.withCriteria(predicate);

  for (var item in input) {
    if (input.hasOwnProperty(item) && cb(input[item], item, input)) {
      result.push(input[item]);
    }
  }

  return result;
}

module.exports = findAll;
