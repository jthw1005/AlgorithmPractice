/**
 * 실패율
 * https://school.programmers.co.kr/learn/courses/30/lessons/42889
 */

function solution(N, stages) {
  const arr = new Array(N).fill(0);
  let numOfUsers = stages.length;

  stages.forEach((el) => {
    if (el > N) return;
    arr[el - 1]++;
  });

  return arr
    .map((usersOnCurrStage, idx) => {
      if (idx > 0) numOfUsers -= arr[idx - 1];
      return [idx + 1, usersOnCurrStage / numOfUsers];
    })
    .sort((a, b) => b[1] - a[1])
    .map((el) => el[0]);
}
