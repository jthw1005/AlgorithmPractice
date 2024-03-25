const fp = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(fp).toString().trim().split('\n');

const n = input[0];
const arr = input[1].split(' ').map(Number);

const resultArr = [[arr[0]]];

for (let i = 1; i < n; i++) {
  let maxLen = 0;
  let maxLenIdx = -1;
  for (let j = i; j >= 0; j--) {
    if (arr[i] > arr[j] && maxLen < resultArr[j].length) {
      maxLen = resultArr[j].length;
      maxLenIdx = j;
    }
  }
  resultArr[i] = maxLenIdx < 0 ? [arr[i]] : [...resultArr[maxLenIdx], arr[i]];
}

let maxLen = 0;
let maxLenIdx = 0;

for (let i = 0; i < resultArr.length; i++) {
  if (resultArr[i].length > maxLen) {
    maxLen = resultArr[i].length;
    maxLenIdx = i;
  }
}

console.log(maxLen + '\n' + resultArr[maxLenIdx].join(' '));
