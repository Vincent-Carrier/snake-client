const { connect } = require("./client");
const { handleUserInput } = require('./input');

console.log("Connecting ...");
const conn = connect();

conn.on("data", data => {
  console.log("u ded");
});


conn.on('connect', () => handleUserInput(conn));
