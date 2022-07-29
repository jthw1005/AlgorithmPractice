/**
 * 수박수박수박수박수박수?
 * https://school.programmers.co.kr/learn/courses/30/lessons/12922
 */

function solution(n) {
  const answer = '수박'.repeat(Math.floor(n / 2));
  return n % 2 === 0 ? answer : `${answer}수`;
}
