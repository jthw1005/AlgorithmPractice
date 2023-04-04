const fp = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [n, ...input] = require('fs')
  .readFileSync(fp)
  .toString()
  .trim()
  .split('\n');

const data = input
  .map((v) => v.split(' ').map(Number))
  .sort((n, p) => n[1] - p[1]);

const record = [];

const calculateIndex = (arr, num) => {
  let lo = 0;
  let hi = arr.length - 1;
  let mid;

  if (num <= arr[lo]) return 0;

  while (hi - lo > 1) {
    mid = Math.floor((lo + hi) / 2);
    if (arr[mid] > num) hi = mid;
    else if (arr[mid] < num) lo = mid;
    else return mid;
  }

  return hi;
};

const arr = [data[0][0]];
let lastEl = data[0][0];
record[0] = 1;
let idx;

for (let i = 1; i < n; i++) {
  if (data[i][0] > lastEl) {
    arr.push(data[i][0]);
    record.push(arr.length);
  } else if (data[i][0] < lastEl) {
    idx = calculateIndex(arr, data[i][0]);
    arr[idx] = data[i][0];
    record.push(idx + 1);
  }
  lastEl = arr[arr.length - 1];
}

let x = arr.length;
const answerArr = [];

for (let i = n - 1; i >= 0; i--) {
  if (record[i] !== x) {
    answerArr.push(data[i][0]);
  } else {
    x--;
  }
}

console.log(n - arr.length);
console.log(answerArr.sort((n, p) => n - p).join('\n'));
