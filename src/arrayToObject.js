var value = require('./value');

/**
 * Converts array to a literal object with the array values used as keys. So this is
 * to be used for converting an array of string/number entries to a literal object with
 * those values as the keys for the new object.
 *
 * @param { array } input - Items to convert to a map
 * @param { *? } val - Can be a function, in which case it is called with the currect
 *  item in the array being processed in order to derive the value for the map entry.
 *  If a value of any other type is provided, that is used for populating each entry
 *  in the resulting map. Or if a value is not provided, all entries will be initialized
 *  to `true`
 *
 * @returns { object } Object will all the array values as keys and the derived
 *  values
 */
function arrayToObject(input, val) {
  return input.reduce(function(container, key) {
    container[key] = value(val, [key, input], null, true);
    return container;
  }, {});
}

module.exports = arrayToObject;
