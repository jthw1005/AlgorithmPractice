const fp = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [[n, m], ...data] = require('fs')
  .readFileSync(fp)
  .toString()
  .trim()
  .split('\n')
  .map((v) => v.split(' ').map(Number));

const swap = (arr, idx1, idx2) => {
  [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
};

const arr = Array.from({ length: n }, (_, i) => i + 1);

for (let i = 0; i < m; i++) {
  swap(arr, data[i][0] - 1, data[i][1] - 1);
}

console.log(arr.join(' '));
