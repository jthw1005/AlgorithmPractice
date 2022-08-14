/**
 * 제일 작은 수 제거하기
 * https://school.programmers.co.kr/learn/courses/30/lessons/12935
 */

function solution(arr) {
  return arr.length === 1 ? [-1] : arr.filter((el, idx) => idx !== arr.indexOf(Math.min(...arr)));
}
