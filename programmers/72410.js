/**
 * 신규 아이디 추천
 * https://school.programmers.co.kr/learn/courses/30/lessons/72410
 */

function solution(new_id) {
  const regex = {
    unAllowedChar: /[^a-zA-Z0-9-_.]/g,
    twoDots: /\.{2,}/g,
    sideDots: /^\.|\.$/g,
  };

  let answer = new_id
    .toLowerCase()
    .replace(regex.unAllowedChar, '')
    .replace(regex.twoDots, '.')
    .replace(regex.sideDots, '');

  const len = answer.length;

  if (len === 0) {
    return 'aaa';
  }

  if (len >= 16) {
    answer = answer.slice(0, 15).replace(regex.sideDots, '');
  }

  while (answer.length < 3) {
    answer = answer.concat('', answer[answer.length - 1]);
  }

  return answer;
}
