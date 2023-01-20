const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');

const getLIS = (input) => {
  // 특정 숫자에 대해서 해당 숫자가 LIS 내에서 몇 번째로 큰지 찾아야 함.
  const calculateIndex = (arr, num) => {
    // num이 arr의 최댓값보다 크거나 arr의 개수가 1개 미만인 경우 null을 반환
    if (num > arr[arr.length - 1] || arr.length < 1) {
      return null;
    }

    // 이분탐색 본 로직 시작
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

  //  dpArr 셋팅
  const dpArr = [input[0]];

  input.forEach((el) => {
    const curMaxVal = dpArr[dpArr.length - 1];
    if (curMaxVal < el) {
      dpArr.push(el);
    } else if (curMaxVal > el) {
      const index = calculateIndex(dpArr, el);
      dpArr[index] = el;
    }
    // 👇로직을 직관적으로 이해할 수 있음.
    // console.log(dpArr)
  });

  return dpArr;
};

const numOfLines = +input.shift();
const newArr = input
  .map((v) => v.split(' ').map(Number))
  .sort((n, p) => n[0] - p[0])
  .map((v) => v[1]);

// 전체 전깃줄의 개수에서 LIS의 길이만큼 빼면 답이 나옴.
const lenOfLIS = getLIS(newArr).length;
const answer = numOfLines - lenOfLIS;

console.log(answer);
