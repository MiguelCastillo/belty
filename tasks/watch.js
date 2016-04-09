var env = require("./env");

module.exports = {
  test: {
    files: ['src/**/*.js', 'test/**/*.js', '*.js'],
    tasks: ['build'],
    options: {
      livereload: env.livereloadPortNumber
    }
  }
};
