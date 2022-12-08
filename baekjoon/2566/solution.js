const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map((v) => v.split(' ').map(Number));

let row = 0;
let col = 0;
let max = -Infinity;
for (let i = 0; i < input.length; i++) {
  for (let j = 0; j < input[0].length; j++) {
    if (input[i][j] > max) {
      max = input[i][j];
      row = i;
      col = j;
    }
  }
}

console.log(`${max}
${row + 1} ${col + 1}`);
