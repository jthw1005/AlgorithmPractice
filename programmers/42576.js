/**
 * 완주하지 못한 선수
 * https://school.programmers.co.kr/learn/courses/30/lessons/42576
 */

function solution(participant, completion) {
  const obj = {};

  participant.forEach((player) => {
    obj[player] = (obj[player] || 0) + 1;
  });

  completion.forEach((player) => {
    obj[player] = obj[player] - 1;
  });

  for (const key in obj) {
    if (obj[key] !== 0) {
      return key;
    }
  }
}
