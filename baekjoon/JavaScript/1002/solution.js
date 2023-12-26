const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [n, ...inputs] = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map((v) => v.split(' ').map(Number));

const solution = ([x1, y1, r1, x2, y2, r2]) => {
  if (x1 === x2 && y1 === y2 && r1 === r2) {
    return -1;
  }
  const distance = Math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2);
  if (distance > r1 + r2 || Math.abs(r2 - r1) > distance) {
    return 0;
  } else if (Math.abs(r2 - r1) === distance || distance === r1 + r2) {
    return 1;
  } else if (distance < r1 + r2) {
    return 2;
  }
};

let result = [];
inputs.forEach((input) => {
  result.push(solution(input));
});
console.log(result.join('\n'));
