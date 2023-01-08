const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [n, a] = require('fs')
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
let closestVal = Infinity;
let answer = [input[left], input[right]];

while (left < right) {
  const tempVal = input[left] + input[right];
  if (Math.abs(tempVal) < closestVal) {
    closestVal = Math.abs(tempVal);
    answer = [input[left], input[right]];
  }
  if (tempVal > 0) {
    right--;
  } else if (tempVal < 0) {
    left++;
  } else {
    console.log(input[left], input[right]);
    break;
  }
}

console.log(answer.join(' '));
