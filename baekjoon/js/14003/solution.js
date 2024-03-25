const fp = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [n, arr] = require('fs').readFileSync(fp).toString().trim().split('\n');

const input = arr.split(' ').map(Number);
const dpArr = [input[0]];
const record = [0];

const calculateIndex = (arr, num) => {
  let left = 0;
  let right = arr.length - 1;

  if (arr[left] >= num) return left;
  else if (arr[right] <= num) return right;

  while (right - left > 1) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] > num) {
      right = mid;
    } else if (arr[mid] < num) {
      left = mid;
    } else {
      return mid;
    }
  }
  return right;
};

for (let i = 1; i < n; i++) {
  const len = dpArr.length;
  if (dpArr[len - 1] < input[i]) {
    record.push(len);
    dpArr.push(input[i]);
  } else {
    const index = calculateIndex(dpArr, input[i]);
    record.push(index);
    dpArr[index] = input[i];
  }
}

const lis = [];
let j = dpArr.length - 1;
for (let i = n - 1; i >= 0; i--) {
  if (record[i] === j) {
    lis.push(input[i]);
    j--;
  }
}

console.log(lis.length + '\n' + lis.reverse().join(' '));
