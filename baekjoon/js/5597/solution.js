const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n').map(Number);

const arr = Array.from({ length: 30 }, () => false);

input.forEach((el) => {
  arr[el - 1] = true;
});

arr.forEach((el, idx) => {
  if (!el) console.log(idx + 1);
});
