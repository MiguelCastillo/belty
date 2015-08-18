## belty
General purpose utility belt

### API


#### noop(arg?)

Noop method - does nothing.

> With the exception that it can optionally take 1 argument. Whatever the argument passed is, it is just returned. Handy for using in Promise chains that just needs a function to take an input and forward it.


#### result(input, property, data?, context?)

Gracefully handle generating an output from `input`. `input` is an object and if the property in the object is a function, then the function is called and the result is returned. Otherwise, the value from `input[property]` is returned.

- **@param** {object} *input* - Object to read `property` from.
- **@param** {string|number} *property* - Property to read from the `input` object
- **@param** {array} *data* - Data to be passed to the when value is a function.
- **@param** {*} *context* - Context used when value is a function.
- **@returns** {*} result of calling the function or property from `input`.


#### pluck(input, keys)

- **@param** {object} *input* - Object to extract data from.
- **@param** {string|string[]|object} *keys* - Items to extract from `input`.

  If `keys` is a string, then it is used as *the* key for extracting the value out of `input`, and returned as the output.

  If `keys` is an object, then all *matching key/value pairs* are extracted from `input`.

  If `keys` is an array of strings, then all the values in the array are used as keys to extract the values out of `input`.


#### extend(target, ...)

Copies all properties from input objects into `target` object. This is a shallow copy.

- **@param** {object} *target* - Object to copy properties to.
- **@param** {...} *rest* - Arguments to be merged into `target`. Can be `n` items.
- **@returns** {object} Object with all arguments merged in.


#### merge(target, ...)

Deep copy all properties from input objects into `target` object. This is will recursively process object and all other are copied as is, including arrays.

- **@param** {object} *target* - Object to copy properties to.
- **@param** {...} *rest* - Arguments to be *recursively* merged into `target`. Can be `n` items.
- **@returns** {object} Object with all arguments merged in.


### Licensed under MIT
