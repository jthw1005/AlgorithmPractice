/**
 * 가운데 글자 가져오기
 * https://school.programmers.co.kr/learn/courses/30/lessons/12903
 */

function solution(s) {
  const len = s.length;
  let startIdx, endIdx;

  if (len % 2 === 0) {
    startIdx = len / 2 - 1;
    endIdx = startIdx + 2;
  } else {
    startIdx = Math.floor(len / 2);
    endIdx = startIdx + 1;
  }

  return (answer = s.substring(startIdx, endIdx));
}
