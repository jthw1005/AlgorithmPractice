const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [n, a, x] = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');

const input = a
  .split(' ')
  .map(Number)
  .sort((n, p) => n - p);

let left = 0;
let right = n - 1;
let cnt = 0;

while (left < right) {
  const sum = input[left] + input[right];
  if (sum === +x) {
    cnt++;
    right--;
  } else if (sum > x) {
    right--;
  } else {
    left++;
  }
}

console.log(cnt);
