/**
 * 2016년
 * https://school.programmers.co.kr/learn/courses/30/lessons/12901
 */

function solution(a, b) {
  return new Date(2016, a - 1, b).toString().slice(0, 3).toUpperCase();
}
