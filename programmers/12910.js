/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/12910
 * 나누어 떨어지는 숫자 배열
 */

function solution(arr, divisor) {
  const answer = [];
  arr.forEach((el) => {
    if (el % divisor === 0) {
      answer.push(el);
    }
  });
  if (answer.length === 0) {
    return [-1];
  }
  return answer.sort((a, b) => a - b);
}
