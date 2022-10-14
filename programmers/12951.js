/**
 * JadenCase 문자열 만들기
 * https://school.programmers.co.kr/learn/courses/30/lessons/12951
 */

function solution(s) {
  return s
    .split(' ')
    .map((word) => word.substring(0, 1).toUpperCase() + word.substring(1).toLowerCase())
    .join(' ');
}
