const { connect } = require("./client");

console.log("Connecting ...");
const conn = connect();

conn.on("data", data => {
  console.log("u ded");
});

// conn.on("connect", () => {
//   for (let i = 0; i < 90; i++) {
//     setTimeout(
//       () =>
//         conn.write("Move: up", err => {
//           if (err) throw "Oops";
//         }),
//       50 * i
//     );
//   }
// });
