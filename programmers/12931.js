/**
 * 자릿수 더하기
 * https://school.programmers.co.kr/learn/courses/30/lessons/12931
 */

function solution(n) {
  return (n + '').split('').reduce((prev, curr) => +prev + +curr, 0);
}
