const fp = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(fp).toString().trim().split('\n');
const n = +input[0];
const numbers = input[1].split(' ').map(Number);
const m = +input[2];

const dpTable = Array.from({ length: n }, () => Array(n).fill(0));

for (let i = 0; i < n; i++) {
  dpTable[i][i] = 1;
}

for (let i = 0; i < n - 1; i++) {
  if (numbers[i] === numbers[i + 1]) {
    dpTable[i][i + 1] = 1;
  }
}

for (let i = n - 3; i >= 0; i--) {
  for (let j = i + 2; j < n; j++) {
    if (numbers[i] === numbers[j] && dpTable[i + 1][j - 1]) {
      dpTable[i][j] = 1;
    }
  }
}

let output = '';
for (let i = 3; i < input.length; i++) {
  const [start, end] = input[i].split(' ').map(Number);
  output += `${dpTable[start - 1][end - 1]}\n`;
}

console.log(output);
