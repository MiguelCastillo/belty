var chai = require("chai");

window.chai   = chai;
window.expect = chai.expect;
window.assert = chai.assert;

mocha.setup("bdd");

require([
  "test/spec/extend",
  "test/spec/merge",
  "test/spec/noop",
  "test/spec/result",
  "test/spec/pluck"
], function() {
  if (window.mochaPhantomJS) {
    window.mochaPhantomJS.run();
  }
  else {
    mocha.run();
  }
});
