/**
 * 정수 제곱근 판별
 * https://school.programmers.co.kr/learn/courses/30/lessons/12934
 */

function solution(n) {
  const result = Math.sqrt(n);
  return result % 1 === 0 ? Math.pow(result + 1, 2) : -1;
}
