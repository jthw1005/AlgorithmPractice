const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [n, ...input] = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map((el) => el.split(' ').map(Number));

let widthArr = [0, null];
let heightArr = [0, null];

input.forEach(([direction, length], idx) => {
  if (direction <= 2 && length > widthArr[0]) {
    widthArr = [length, idx];
  } else if (direction >= 3 && length > heightArr[0]) {
    heightArr = [length, idx];
  }
});

const area = widthArr[0] * heightArr[0];
const subArea =
  input[(widthArr[1] + 3) % input.length][1] * input[(heightArr[1] + 3) % input.length][1];

console.log((area - subArea) * n);
