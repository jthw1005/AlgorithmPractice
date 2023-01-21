const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [n, input] = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');

const arr = input.split(' ').map(Number);

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
