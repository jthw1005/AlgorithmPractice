const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [[n, s], input] = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map((v) => v.split(' ').map(Number));

let left = 0;
let right = 0;
let sum = input[left];
let shortestLength = Infinity;

while (right < n && left <= right) {
  if (sum >= s) {
    shortestLength = Math.min(shortestLength, right - left + 1);
    sum -= input[left];
    left++;
  } else if (sum < s) {
    right++;
    sum += input[right];
  }
}

console.log(shortestLength === Infinity ? 0 : shortestLength);
