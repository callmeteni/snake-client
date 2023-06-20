const connect = require("./client.js")


const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

const handleUserInput = function () {
// Terminate the game if Ctrl+C (ASCII value '\u0003') is pressed
if (data === '\u0003')
process.exit();
};

setupInput();

console.log("Connecting ...");
connect();




