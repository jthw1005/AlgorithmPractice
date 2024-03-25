const fp = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(fp).toString().trim().split('\n');

const T = +input[0];
const n = +input[1];
const A = input[2].split(' ').map(Number);
const m = +input[3];
const B = input[4].split(' ').map(Number);

const getSubArraySums = (arr, len) => {
  const resultArr = [];
  for (let i = 0; i < len; i++) {
    let sum = 0;
    for (let j = i; j < len; j++) {
      sum += arr[j];
      resultArr.push(sum);
    }
  }
  return resultArr;
};

const subArraySumsOfA = getSubArraySums(A, n).sort((n, p) => n - p);
const subArraySumsOfB = getSubArraySums(B, m).sort((n, p) => n - p);

let answer = 0;
let left = 0;
let right = subArraySumsOfB.length - 1;

while (left < subArraySumsOfA.length && right >= 0) {
  const sum = subArraySumsOfA[left] + subArraySumsOfB[right];

  if (sum === T) {
    let leftCnt = 1;
    let rightCnt = 1;

    while (
      left + 1 < subArraySumsOfA.length &&
      subArraySumsOfA[left + 1] === subArraySumsOfA[left]
    ) {
      leftCnt++;
      left++;
    }

    while (
      right - 1 >= 0 &&
      subArraySumsOfB[right - 1] === subArraySumsOfB[right]
    ) {
      rightCnt++;
      right--;
    }

    answer += leftCnt * rightCnt;
    left++;
    right++;
  } else if (sum < T) {
    left++;
  } else {
    right--;
  }
}

console.log(answer);
