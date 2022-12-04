const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [n, input] = require('fs').readFileSync(filePath).toString().trim().split('\n');

const arr = input.split(' ').map(Number);
const resultArr = [];
for (let i = 0; i < arr.length; i++) {
  resultArr.push(Math.max(arr[i], arr[i] + resultArr[resultArr.length - 1] || 0));
}

console.log(Math.max(...resultArr));
