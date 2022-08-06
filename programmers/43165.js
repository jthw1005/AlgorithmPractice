/**
 * 타겟 넘버
 * https://school.programmers.co.kr/learn/courses/30/lessons/43165
 */

function solution(numbers, target) {
  let answer = 0;
  let depth = 0;

  const doSome = (sum) => {
    if (depth === numbers.length && sum === target) {
      answer++;
      return;
    }

    depth++;

    doSome(sum + numbers[depth - 1]);
    doSome(sum - numbers[depth - 1]);
  };

  doSome(0);

  return answer;
}
