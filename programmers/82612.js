/**
 * 부족한 금액 계산하기
 * https://school.programmers.co.kr/learn/courses/30/lessons/82612
 */

function solution(price, money, count) {
  const answer = (price * count * (count + 1)) / 2 - money;
  return answer > 0 ? answer : 0;
}
