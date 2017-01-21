module.exports = function(grunt) {
  require("load-grunt-tasks")(grunt);
  var taskConfig = require("config-grunt-tasks")(grunt, "./tasks");

  taskConfig.pkg = require("./package.json");
  grunt.initConfig(taskConfig);

  grunt.registerTask("build", ["pakit:build"]);
  grunt.registerTask("serve", ["concurrent:test"]);
  grunt.registerTask("test", ["connect:test", "mocha:test"]);
};
