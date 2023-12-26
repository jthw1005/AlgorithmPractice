const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [[_, neededTreeLen], trees] = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map((v) => v.split(' ').map(Number));

let minCutHeight = 0;
let maxCutHeight = Math.max(...trees);
let midCutHeight;

while (minCutHeight + 1 < maxCutHeight) {
  midCutHeight = Math.floor((minCutHeight + maxCutHeight) / 2);
  let sumOfChoppedTrees = 0;
  for (let i = 0; i < trees.length; i++) {
    sumOfChoppedTrees += trees[i] > midCutHeight ? trees[i] - midCutHeight : 0;
  }
  sumOfChoppedTrees >= neededTreeLen
    ? (minCutHeight = midCutHeight)
    : (maxCutHeight = midCutHeight);
}

console.log(minCutHeight);
