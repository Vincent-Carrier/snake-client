const setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  return stdin;
};

const stdin = setupInput();

const keybindings = {
  w: "up",
  a: "left",
  s: "down",
  d: "right"
};

const messages = {
  l: "lol",
  r: "rofl"
};

const handleUserInput = function(conn) {
  stdin.on("data", char => {
    if (char === "q") process.exit;
    if (keybindings[char]) {
      conn.write(`Move: ${keybindings[char]}`, err => {
        if (err) throw err;
      });
    } 
    if (messages[char]) {
      conn.write(`Say: ${messages[char]}`, err => {
        if (err) throw err;
      });
    }
  });
};

module.exports.handleUserInput = handleUserInput;
