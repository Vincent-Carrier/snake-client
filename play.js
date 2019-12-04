const { connect } = require("./client");

console.log("Connecting ...");
const conn = connect();

conn.on("data", data => {
  console.log("u ded");
});

const setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  return stdin;
}

const stdin = setupInput();

const keybindings = {
  'w': 'up',
  'a': 'left',
  's': 'down',
  'd': 'right',
};

const handleUserInput = function(conn) {
  stdin.on('data', char => {
    if (char === '') process.exit;
    conn.write(`Move: ${keybindings[char]}`, err => { if (err) throw err; })
  });
};

conn.on('connect', () => handleUserInput(conn));
