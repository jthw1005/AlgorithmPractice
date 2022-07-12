/**
 * 약수의 개수와 덧셈
 * https://school.programmers.co.kr/learn/courses/30/lessons/77884
 */

function isInteger(number) {
  return number % 1 === 0;
}

function solution(left, right) {
  let answer = 0;

  for (let i = left; i <= right; i++) {
    let num = i;
    const sqrtNum = Math.sqrt(num);

    if (isInteger(sqrtNum)) {
      num *= -1;
    }
    answer = answer + num;
  }

  return answer;
}

/**
 * 약수의 개수가 홀수인지 짝수인지 판별하는 문제
 * 제곱수의 경우에만 약수의 개수가 홀수이므로 결국 제곱수인지 확인하는 과정만 거치면 간단히 풀리는 문제다.
 */
