const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [[n, c], weightArray] = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map((v) => v.split(' ').map(Number));

const calSumCombi = (arr, idx, sum, sumArr) => {
  if (idx === arr.length) return sumArr.push(sum);
  calSumCombi(arr, idx + 1, sum, sumArr);
  calSumCombi(arr, idx + 1, sum + arr[idx], sumArr);
};

const [weightA, weightB] = [[], []];
calSumCombi(weightArray.slice(0, Math.floor(n / 2)), 0, 0, weightA);
calSumCombi(weightArray.slice(Math.floor(n / 2)), 0, 0, weightB);
weightA.sort((n, p) => n - p);
weightB.sort((n, p) => n - p);

let answer = 0;
for (let i = 0, j = weightB.length - 1; i < weightA.length; i++) {
  while (weightA[i] + weightB[j] > c) j--;
  answer += j + 1;
}

console.log(answer);
