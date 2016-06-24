var livereloadPortNumber = 57382; //generatePortNumber();
var keepalivePortNumber = 57383; //generatePortNumber();
var testPortNumber = 57384; //generatePortNumber();

module.exports = {
  livereloadPortNumber: livereloadPortNumber,
  keepalivePortNumber: keepalivePortNumber,
  testPortNumber: testPortNumber
};

function generatePortNumber() {
  return (Math.floor((Math.random() * 10000)) + 10000) % 65535;
}
