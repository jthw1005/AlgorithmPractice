/**
 * 최솟값 만들기
 * https://school.programmers.co.kr/learn/courses/30/lessons/12941
 */

function solution(A, B) {
  let answer = 0;
  const newA = A.sort((a, b) => a - b);
  const newB = B.sort((a, b) => b - a);

  newA.forEach((el, idx) => {
    answer += el * newB[idx];
  });

  return answer;
}
