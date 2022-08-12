/**
 * 문자열 내 p와 y의 개수
 * https://school.programmers.co.kr/learn/courses/30/lessons/12916
 */

function solution(s) {
  let count = 0;
  const test_S = s.toLowerCase();

  for (let i = 0; i < test_S.length; i++) {
    if (test_S[i] === 'p') count++;
    else if (test_S[i] === 'y') count--;
  }

  return count === 0;
}
