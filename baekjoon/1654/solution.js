const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [kn, ...input] = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');

const [k, n] = kn.split(' ').map(Number);
const newInput = input.map(Number);

const solution = (input, length) => {
  let cnt = 0;
  for (let i = 0; i < input.length; i++) {
    cnt += Math.floor(input[i] / length);
  }
  return cnt;
};

let left = 1;
let right = Math.max(...newInput);
let mid;

while (left <= right) {
  mid = Math.floor((left + right) / 2);
  const numOfCables = solution(newInput, mid);

  if (numOfCables >= n) {
    left = mid + 1;
  } else {
    right = mid - 1;
  }
}

console.log(right);
