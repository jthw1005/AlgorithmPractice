const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [n, arr] = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');
const input = arr.split(' ').map(Number);

const getLIS = (input) => {
  const calculateIndex = (arr, num) => {
    // num이 arr의 최댓값보다 크거나 arr의 개수가 1개 미만인 경우 null을 반환
    if (num > arr[arr.length - 1] || arr.length < 1) {
      return null;
    }

    let left = 0;
    let right = arr.length - 1;

    // 이분탐색 예외 처리
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
      const index = calculateIndex(dpArr, el);
      dpArr[index] = el;
    }
  });

  return dpArr.length;
};

console.log(getLIS(input));
