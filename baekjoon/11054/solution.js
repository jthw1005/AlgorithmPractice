const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [n, input] = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');

const arr = input.split(' ').map(Number);

/* 이진탐색을 이용한 풀이 */
const getLIS = (input) => {
  if (!input.length) {
    return input;
  }

  const calculateIdx = (arr, num) => {
    if (num > arr[arr.length - 1] || arr.length < 1) {
      return null;
    }

    let left = 0;
    let right = arr.length - 1;

    if (num <= arr[left]) {
      return 0;
    }

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

  const dpArr = [input[0]];

  input.forEach((el) => {
    const curMaxVal = dpArr[dpArr.length - 1];
    if (curMaxVal < el) {
      dpArr.push(el);
    } else if (curMaxVal > el) {
      const index = calculateIdx(dpArr, el);
      dpArr[index] = el;
    }
  });

  return dpArr;
};

const getLDS = (input) => {
  if (!input.length) {
    return input;
  }

  const calculateIdx = (arr, num) => {
    if (num < arr[arr.length - 1] || arr.length < 1) {
      return null;
    }

    let left = 0;
    let right = arr.length - 1;

    if (num >= arr[left]) {
      return 0;
    }

    while (right - left > 1) {
      const mid = Math.floor((left + right) / 2);
      if (arr[mid] > num) {
        left = mid;
      } else if (arr[mid] < num) {
        right = mid;
      } else {
        return mid;
      }
    }

    return right;
  };

  const dpArr = [input[0]];

  input.forEach((el) => {
    const curMinVal = dpArr[dpArr.length - 1];
    if (curMinVal > el) {
      dpArr.push(el);
    } else if (curMinVal < el) {
      const index = calculateIdx(dpArr, el);
      dpArr[index] = el;
    }
  });

  return dpArr;
};

const resultArr = [];

for (let i = 1; i <= +n; i++) {
  const lenOfLIS = getLIS(arr.slice(0, i)).length;
  const lenOfLDS = getLDS(arr.slice(i - 1)).length;
  resultArr.push(lenOfLIS + lenOfLDS - 1);
}

console.log(Math.max(...resultArr));

/* DP를 이용한 풀이  */
const solution = (n, arr) => {
  const dp1 = new Array(n).fill(1);
  const dp2 = new Array(n).fill(1);

  for (let i = 0; i < n; i++) {
    for (let j = 0; j <= i; j++) {
      // lis
      if (arr[i] > arr[j] && dp1[i] < dp1[j] + 1) {
        dp1[i] = dp1[j] + 1;
      }

      // lds
      if (
        arr[n - 1 - i] > arr[n - 1 - i + j] &&
        dp2[n - 1 - i] < dp2[n - 1 - i + j] + 1
      ) {
        dp2[n - 1 - i] = dp2[n - 1 - i + j] + 1;
      }
    }
  }

  let max = 0;
  for (let i = 0; i < n; i++) {
    if (max < dp1[i] + dp2[i] - 1) {
      max = dp1[i] + dp2[i] - 1;
    }
  }

  return max;
};
