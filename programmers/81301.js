/**
 * 숫자 문자열과 영단어
 * https://school.programmers.co.kr/learn/courses/30/lessons/81301
 */

function solution(s) {
  const regex = {
    0: /zero/g,
    1: /one/g,
    2: /two/g,
    3: /three/g,
    4: /four/g,
    5: /five/g,
    6: /six/g,
    7: /seven/g,
    8: /eight/g,
    9: /nine/g,
  };

  let answer = s;

  for (const key in regex) {
    answer = answer.replace(regex[key], key);
  }

  return +answer;
}

console.log(solution('one4seveneight'));
