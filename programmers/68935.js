/**
 * 3진법 뒤집기
 * https://school.programmers.co.kr/learn/courses/30/lessons/68935
 */

function solution(n) {
  let reversed_N = n.toString(3).split('').reverse().join('');
  return parseInt(reversed_N, 3);
}
