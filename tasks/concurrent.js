module.exports = {
  test: {
    tasks: ['connect:keepalive', 'watch:test'],
    options: {
      logConcurrentOutput : true
    }
  }
};
