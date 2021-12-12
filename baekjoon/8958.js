const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const number = Number(input[0]);

for (let i = 0; i < number; i++) {
  let cnt = 0;
  let sum = 0;

  for (let j = 0; j < input[i + 1].length; j++) {
    if (input[i + 1][j] === "O") cnt++;
    else cnt = 0;

    sum += cnt;
  }
  console.log(sum);
}
