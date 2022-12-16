const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [[n, m], input] = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map((v) => v.split(' ').map(Number));

const obj = { 0: 1 };

console.log(
  input
    .map((v, i, arr) => {
      if (i === 0) return v;
      return (arr[i] = v + arr[i - 1]);
    })
    .map((v) => v % m)
    .map((v) => {
      obj[v] = obj[v] || 0;
      return obj[v]++;
    })
    .reduce((acc, cur) => acc + cur, 0)
);
