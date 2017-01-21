var env = require("./env");

module.exports = {
  test: {
    files: ['src/**/*.js'],
    options: {
      livereload: env.livereloadPortNumber
    }
  }
};
