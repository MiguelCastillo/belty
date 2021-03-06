/*eslint no-unused-vars: 0*/
var System = (function() {
  var importer = bitimports.config({
    "baseUrl": "../",
    "paths": {
      "chai": "node_modules/chai/chai",
      "dis-isa": "node_modules/dis-isa/dist/index",
      "split-keypath": "node_modules/split-keypath/dist/index",
      "chance": "node_modules/chance/chance",
      "sinon": "node_modules/sinon/pkg/sinon"
    },
    "urlArgs": "bust=" + (new Date()).getTime()
  });

  bitimports.logger.enable().level(bitimports.logger.levels.warn);
  return importer;
})();
