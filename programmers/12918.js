/**
 * 문자열 다루기 기본
 * https://school.programmers.co.kr/learn/courses/30/lessons/12918
 */

function solution(s) {
  let result = parseInt(s);
  if ((s.length === 4 || s.length === 6) && s == result) {
    result = true;
  } else {
    result = false;
  }
  return result;
}
