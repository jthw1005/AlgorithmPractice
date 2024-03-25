const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [n, arr, v] = require('fs').readFileSync(filePath).toString().trim().split('\n');

const input = arr.split(' ').map(Number);

let answer = 0;
input.forEach((el) => {
  if (el === +v) {
    answer++;
  }
});

console.log(answer);
