/**
 * 가운데 글자 가져오기
 * https://school.programmers.co.kr/learn/courses/30/lessons/12903
 */

function solution(s) {
  const len = s.length;
  let startIdx, resultLength;

  if (len % 2 === 0) {
    startIdx = len / 2 - 1;
    resultLength = 2;
  } else {
    startIdx = len / 2;
    resultLength = 1;
  }

  return (answer = s.substr(startIdx, resultLength));
}
