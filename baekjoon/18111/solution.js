const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');

const [n, m, b] = input.shift().split(' ').map(Number);
const heights = new Array(257).fill(0);
input.forEach((el) => {
  el.split(' ').forEach((ell) => {
    heights[+ell]++;
  });
});

let minCost = Infinity;
let height = null;

for (let i = 256; i >= 0; i--) {
  let add = 0,
    remove = 0;
  heights.forEach((el, idx) => {
    if (idx > i) {
      remove += (idx - i) * el;
    } else if (idx < i) {
      add += (i - idx) * el;
    }
  });
  if (add - remove > b) continue;
  const curCost = add + remove * 2;
  if (curCost < minCost) {
    minCost = curCost;
    height = i;
  } else if (curCost > minCost) {
    break;
  }
}

console.log(minCost, height);
