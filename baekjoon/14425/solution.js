const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [nums, ...arr] = require('fs').readFileSync(filePath).toString().trim().split('\n');
const [n, m] = nums.split(' ').map(Number);

const hash = {};
arr.slice(0, n).forEach((el) => {
  hash[el] = true;
});

let cnt = 0;
arr.slice(n).forEach((el) => {
  if (hash[el]) {
    cnt++;
  }
});

console.log(cnt);
