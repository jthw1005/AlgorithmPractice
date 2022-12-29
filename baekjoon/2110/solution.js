const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [a, ...b] = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');

const [n, c] = a.split(' ').map(Number);
const len = b.map(Number).sort((n, p) => n - p);
const calNumOfWifiHouse = (arr, dist) => {
  let cnt = 1;
  let curHouse = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] >= curHouse + dist) {
      curHouse = arr[i];
      cnt++;
    }
  }
  return cnt;
};

let lo = 1;
let hi = len[len.length - 1];
let mid;

while (lo + 1 < hi) {
  mid = Math.floor((lo + hi) / 2);
  const numOfWifiHouse = calNumOfWifiHouse(len, mid);
  if (numOfWifiHouse < c) {
    hi = mid;
  } else {
    lo = mid;
  }
}

console.log(lo);
