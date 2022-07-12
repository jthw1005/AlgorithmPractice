/**
 * 이상한 문자 만들기
 * https://school.programmers.co.kr/learn/courses/30/lessons/12930
 */

function solution(s) {
  let result = '';
  let num = 0;
  const len = s.length;

  for (let i = 0; i < len; i++) {
    if (s[i] == ' ') {
      num = 0;
      result += ' ';
    } else if (num % 2 === 0) {
      result += s[i].toUpperCase();
      num++;
    } else {
      result += s[i].toLowerCase();
      num++;
    }
  }

  return result;
}
