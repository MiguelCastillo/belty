/* jshint unused: false, undef: false */
var System = (function() {
  var importer = bitimports.config({
    "baseUrl": "../",
    "paths": {
      "chai": "node_modules/chai/chai",
      "dis-isa": "node_modules/dis-isa/dist/index",
      "split-keypath": "node_modules/split-keypath/dist/index"
    },
    "urlArgs": 'bust=' + (new Date()).getTime()
  });

  // Add modules to exclude from pipeline processing
  importer.ignore(["chai"]);

  bitimports.logger.enable();
  return importer;
})();
