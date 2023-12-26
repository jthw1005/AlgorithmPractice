const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map(Number);

const dpArr = new Array(11);
dpArr[1] = 1;
dpArr[2] = 2;
dpArr[3] = 4;

for (let i = 4; i < 11; i++) {
  dpArr[i] = dpArr[i - 1] + dpArr[i - 2] + dpArr[i - 3];
}

input.shift();
const answer = input.map((v) => {
  return dpArr[v];
});

console.log(answer.join('\n'));
