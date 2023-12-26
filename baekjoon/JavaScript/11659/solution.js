const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [_, arr, ...ranges] = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map((v) => v.split(' ').map(Number));

const accArr = [0];
arr.reduce((acc, cur) => {
  const sum = acc + cur;
  accArr.push(sum);
  return sum;
}, 0);

const result = [];
ranges.forEach((el) => {
  const [start, end] = el;
  result.push(accArr[end] - accArr[start - 1]);
});

console.log(result.join('\n'));
