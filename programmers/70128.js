/**
 * 내적
 * https://school.programmers.co.kr/learn/courses/30/lessons/70128
 */

function solution(a, b) {
  return a.reduce((acc, cur, idx) => {
    return (acc = acc + a[idx] * b[idx]);
  }, 0);
}
