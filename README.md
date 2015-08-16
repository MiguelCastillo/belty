## belty
General purpose utility belt

### API


#### noop(arg?)

Method that does nothing. With the exception that it can optionally take 1 argument, which is returned. Otherwise it does nothing.


#### function result(input, args?, context?)

Gracefully generates an output from `input`. `input` can be a function, in which case it is called, and whatever is returned is the ouput. Otherwise, the rest of the arguments are processed to determine what needs to be returned.

**@param** {any} *input* - If function, it is called and the result is returned. Otherwise the rest of the arguments are processed.

**@param** {any} *args* - Arguments to pass to `input` when it is a function, otherwise used as keys to extract data from `input`.

If args is a string, then it is used as a key for extracting the value out of `input`. The value is returned.

If args is an object, then all the keys in args are used for extracting the values out of `input`. An object is created and all the values are aggregated.

If args is an array, then all the values in the array are used as keys for extracting the values out of `input`. An object is created and all the values are aggregated.

**@param** {any} *context* - Context used when `input` is a function.

**@returns** {any} If `input` is a function, then the result of calling it is returned. Otherwise args are processed to determine what is returned.



#### function extend(target, ...)

Copies all properties from input objects into `target` object. This is a shallow copy.

**@param** {object} *target* - Object to copy properties to.

**@param** {...} *rest* - Arguments to be merged into `target`. Can be `n` items.

**@returns** {object} Object with all arguments merged in.


#### function merge(target, ...)

Deep copy all properties into `target` object.

**@param** {object} *target* - Object to copy properties to.

**@param** {...} *rest* - Arguements to be *recursively* merged into `target`. Can be `n` items.

**@returns** {object} Object with all arguments merged in.


### Licensed under MIT
