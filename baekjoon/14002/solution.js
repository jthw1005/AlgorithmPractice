const fp = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(fp).toString().trim().split('\n');

const n = input[0];
const arr = input[1].split(' ').map(Number);

const resultArr = [[arr[0]]];

for (let i = 1; i < arr.length; i++) {
  const currentNum = arr[i];
  for (let j = i; j >= 0; j--) {
    if (currentNum > arr[j]) {
      resultArr[i] = [...resultArr[j], currentNum];
      break;
    }
  }
}

let maxLen = 0;
let maxLenIdx = 0;

for (let i = 0; i < resultArr.length; i++) {
  if (resultArr[i].length > maxLen) {
    maxLen = resultArr[i].length;
    maxLenIdx = i;
  }
}

console.log(resultArr[maxLenIdx].join(' '));
