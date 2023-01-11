const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [[n, c], weightArray] = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map((v) => v.split(' ').map(Number));

const calSumCombi = (arr, idx, sumArr) => {
  if (idx === arr.length) return;
  let weight;
  const len = sumArr.length;
  for (let i = 0; i < len; i++) {
    weight = sumArr[i] + arr[idx];
    if (weight <= c) {
      sumArr.push(weight);
    }
  }
  calSumCombi(arr, idx + 1, sumArr);
};

const [weightA, weightB] = [[0], [0]];
calSumCombi(weightArray.slice(0, Math.floor(n / 2)), 0, weightA);
calSumCombi(weightArray.slice(Math.floor(n / 2)), 0, weightB);
weightB.sort((a, b) => a - b);

const answer = weightA.reduce((cnt, sum) => {
  const sumLimit = c - sum;
  if (sumLimit < 0) return cnt;
  let lo = 0;
  let hi = weightB.length - 1;
  if (weightB[hi] <= sumLimit) return cnt + hi + 1;
  while (lo + 1 < hi) {
    const mid = Math.floor((lo + hi) / 2);
    if (weightB[mid] > sumLimit) {
      hi = mid;
    } else {
      lo = mid;
    }
  }
  return cnt + lo + 1;
}, 0);

console.log(answer);
