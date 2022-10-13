/**
 * 숫자 짝꿍
 * https://school.programmers.co.kr/learn/courses/30/lessons/131128
 */

function solution(X, Y) {
  const resultArr = [];
  let answer;
  const newX = X.split('').sort((a, b) => a - b);
  const newY = Y.split('').sort((a, b) => a - b);

  let x = 0,
    y = 0;
  while (x !== newX.length && y !== newY.length) {
    if (newX[x] > newY[y]) y++;
    else if (newX[x] < newY[y]) x++;
    else {
      resultArr.push(newX[x]);
      x++;
      y++;
    }
  }

  if (resultArr.length === 0) {
    answer = '-1';
  } else if (resultArr.every((el) => +el === 0)) {
    answer = '0';
  } else {
    answer = resultArr.sort((a, b) => b - a).join('');
  }
  return answer;
}
