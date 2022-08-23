/**
 * 문자열 내 마음대로 정렬하기
 * https://school.programmers.co.kr/learn/courses/30/lessons/12915
 */

function solution(strings, n) {
  return strings.sort((a, b) => {
    return a[n] === b[n] ? compareAlphabet(a, b) : compareAlphabet(a[n], b[n]);
  });
}

function compareAlphabet(word_A, word_B) {
  if (word_A > word_B) return 1;
  else if (word_A < word_B) return -1;
  else return 0;
}
