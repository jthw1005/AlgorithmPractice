/**
 * 행렬의 덧셈
 * https://school.programmers.co.kr/learn/courses/30/lessons/12950
 */

function solution(arr1, arr2) {
  arr1.forEach((el, idx) => {
    arr1[idx].forEach((ell, idxx) => {
      arr1[idx][idxx] = arr1[idx][idxx] + arr2[idx][idxx];
    });
  });

  return arr1;
}
