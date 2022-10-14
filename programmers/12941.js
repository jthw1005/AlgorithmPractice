/**
 * 최솟값 만들기
 * https://school.programmers.co.kr/learn/courses/30/lessons/12941
 */

function solution(A, B) {
  const newA = A.sort((a, b) => a - b);
  const newB = B.sort((a, b) => b - a);
  return newA.reduce((prev, curr, idx) => prev + curr * newB[idx], 0);
}
