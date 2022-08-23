/**
 * 없는 숫자 더하기
 * https://school.programmers.co.kr/learn/courses/30/lessons/86051
 */

function solution(numbers) {
  return 45 - numbers.reduce((prev, curr) => prev + curr, 0);
}
