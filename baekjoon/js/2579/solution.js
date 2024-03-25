const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [destPos, ...scores] = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map(Number);

const dpArr = new Array(destPos).fill(0);
dpArr[0] = scores[0];
dpArr[1] = scores[0] + scores[1];
dpArr[2] = Math.max(scores[2] + scores[1] + 0, scores[2] + dpArr[0]);

for (let i = 3; i < destPos; i++) {
  dpArr[i] = scores[i] + Math.max(scores[i - 1] + dpArr[i - 3], dpArr[i - 2]);
}

console.log(dpArr[destPos - 1]);
