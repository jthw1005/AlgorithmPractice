/**
 * 체육복
 * https://school.programmers.co.kr/learn/courses/30/lessons/42862
 */

function solution(n, lost, reserve) {
  const resultArr = Array.from(new Array(n), () => 1);
  let numOfZero = 0;
  lost.forEach((el) => resultArr[el - 1]--);
  reserve.forEach((el) => resultArr[el - 1]++);

  resultArr.forEach((el, idx) => {
    if (el === 0) {
      if (resultArr[idx - 1] === 2) {
        resultArr[idx - 1]--;
        resultArr[idx]++;
      } else if (resultArr[idx + 1] === 2) {
        resultArr[idx + 1]--;
        resultArr[idx]++;
      } else {
        numOfZero++;
      }
    }
  });

  return resultArr.length - numOfZero;
}
