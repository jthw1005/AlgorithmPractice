const fp = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(fp).toString().trim().split('\n');

const n = +input[0];
const data = input[1].split(' ').map(Number);

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

const arr = [data[0]];
let lastEl = data[0];
let idx;

for (let i = 1; i < n; i++) {
  if (data[i] > lastEl) {
    arr.push(data[i]);
    lastEl = data[i];
  } else if (data[i] < lastEl) {
    idx = calculateIndex(arr, data[i]);
    arr[idx] = data[i];
  }
  console.log(arr);
}

console.log(n - arr.length);
