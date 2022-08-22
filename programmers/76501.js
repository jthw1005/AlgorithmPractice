/**
 * 음양 더하기
 * https://school.programmers.co.kr/learn/courses/30/lessons/76501
 */

function solution(absolutes, signs) {
  let answer = 0;
  signs.forEach((el, idx) => {
    if (el) answer += absolutes[idx];
    else answer -= absolutes[idx];
  });
  return answer;
}
