const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [N, ...arr] = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map(Number);

arr.sort((n, p) => n - p);

const newArr = [];
for (let i = 1; i < arr.length; i++) {
  newArr.push(arr[i] - arr[i - 1]);
}

const getGCD = (a, b) => (a % b ? getGCD(b, a % b) : b);
let val = newArr[0];
for (let i = 1; i < newArr.length; i++) {
  val = getGCD(val, newArr[i]);
}

const answer = [];
for (let i = 2; i <= val; i++) {
  if (val % i === 0) {
    answer.push(i);
  }
}
console.log(answer.join(' '));
