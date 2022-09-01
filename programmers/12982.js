/**
 * 예산
 * https://school.programmers.co.kr/learn/courses/30/lessons/12982
 */

function solution(d, budget) {
  var arr = d.sort((a, b) => a - b);
  let cnt = 0;
  for (; cnt < arr.length; cnt++) {
    if (budget - arr[cnt] >= 0) budget -= arr[cnt];
    else break;
  }
  return cnt;
}
