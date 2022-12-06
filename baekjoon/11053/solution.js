const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [n, arr] = require('fs').readFileSync(filePath).toString().trim().split('\n');
const input = arr.split(' ').map(Number);

const dpArr = [0];

const calculateIndex = (arr, num) => {
  let left = 0;
  let right = arr.length - 1;

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

input.forEach((el) => {
  const curMaxVal = dpArr[dpArr.length - 1];
  if (curMaxVal < el) {
    dpArr.push(el);
  } else if (curMaxVal > el) {
    const index = calculateIndex(dpArr, el);
    dpArr[index] = el;
  }
});

console.log(dpArr.length - 1);
