function defaults(_defaults) {
  function from(options) {
    return {
      value: function(name) {
        return options && options.hasOwnProperty(name) ? options[name] : _defaults[name];
      }
    };
  }

  function read(source, name) {
    return from(source).value(name);
  }

  read.default = _defaults;
  read.from = from;
  return read;
}

module.exports = defaults;
