/**
 * 최대공약수와 최소공배수
 * https://school.programmers.co.kr/learn/courses/30/lessons/12940
 */

function solution(n, m) {
  let i = 1;
  while ((n * i) % m !== 0) i++;
  return [m / i, n * i];
}
