function printStar(num) {
  let str = "";
  for (let i = 0; i < num; i++) {
    str += "*";
  }
  console.log(str);
}

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", function (input) {
  for (let i = 0; i < input; i++) {
    printStar(i + 1);
  }
  rl.close();
});

rl.on("close", function () {
  process.exit();
});
