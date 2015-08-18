/* jshint unused: false, undef: false */
var System = (function() {
  var importer = bitimports.config({
    "baseUrl": "../",
    "paths": {
      "chai": "node_modules/chai/chai",
      "dis-isa": "node_modules/dis-isa/dist/index"
    },
    "urlArgs": 'bust=' + (new Date()).getTime()
  });

  // Add modules to exclude from pipeline processing
  importer.ignore(["chai"]);

  bitimports.Logger.enableAll();
  return importer;
})();

var require = System.require;
