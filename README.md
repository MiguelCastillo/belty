## belty
General purpose utility belt

### API


#### identity(arg?)

Helper method that returns the first argument passed in.

- **@param** {*?} input - Argument to be returned. This is completely optional
- **@returns** {*} This returns whatever is passed in.


#### noop

noop method! It takes no arguments and does not return anything. Useful when you need to setup an initial placeholder function.


#### pick(input, keys)

> Alias `pluck`

Method that extracts key value pairs from the input object.

- **@param** {object} *input* - Object to generate data from.
- **@param** {string|string[]|object} *keys* - Key/value pairs to extract from `input`.
- **@returns** {object} Object with key value pairs of only the matching *keys*.


#### omit(input, keys)

Method that take an object as the input and generates another **omitting** (without) the keys specified.

Opposite of *pick*

- **@param** {object} *input* - Object to generate data from.
- **@param** {string|string[]|object} *keys* - Key/value pairs to exclude from `input`.
- **@returns** {object} Object with key value pairs without the matching *keys*.


#### extend(target, ...)

Shallow copies all properties from the input objects (sources) into the target object. Source objects are processed left to right overriding whatever values already exist in the resulting.

- **@param** {object} *target* - Object to copy properties to.
- **@param** {...} *source* - The source objects to be merged into the target object
- **@returns** {object} Object with all source objects merged in.


#### merge(target, ...)

Deep copy all properties from the input objects (sources) into the target object. Properties are copied from left to right overriding whatever values that already exist in the resulting object.

- **@param** {object} *target* - Object to copy properties to.
- **@param** {...} *source* - The source objects to be merged into the target object
- **@returns** {object} Object with all source objects merged in.


#### value(input, args, context, defaultValue)
> Alias `result`

Method that uses the input to derive a return value.

If the input is a function, then the function is called with the args passed in. If the function returns a value, that value is then returned as the final result. Otherwise, if value is *not* undefined, then that's returned as the final value. Otherwise, the default value is returned.

- **@param** {*} input - input value to derived returned value from.
- **@param** {array} args - Arguments to be passed into the input when it is a function.
- **@param** {*} defaultValue - value to be returned in case the input is not defined.
- **@returns** {*} The derived value


#### objectValue(input, keypath)

Extract values from an input object for a given keypath.

- **@param** {object} input - Object to read `property` from.
- **@param** {string|number|array} keypath - keypath for the value in the object.
- **@returns** {*} The value for the corresponding keypath.


#### objectValues(input)

Gets the values from a map and returns them in an array. If an array is passed in, then the array is returned as is.

- **@param** {object | Array} input - Input to get values from
- **@returns** { Array } - Array of all the values extracted from the input object, or the array itself if the input is an array.



#### arrayToObject(input, fn)

Converts arrays to a literal objects with the array values as keys. You can optionally pass in a callback function that is called in order to generate the values that go in the final result. `fn` can also just be anything to be used as the value for each entry in the final result, otherwise `true` is used.

- **@param** { array } input - Items to convert to a map
- **@param** { *? } val - Can be a function, in which case it is called with the currect item in the array being processed in order to derive the value for the map entry. If a value of any other type is provided, that is used for populating each entry in the resulting map. Or if a value is not provided, all entries will be initialized to `true`
- **@returns** { object } Object will all the array values as keys and the derived values.



### License MIT
