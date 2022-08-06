/**
 * 타겟 넘버
 * https://school.programmers.co.kr/learn/courses/30/lessons/43165
 */

function solution(numbers, target) {
  let answer = 0;

  const doSome = (sum, depth) => {
    if (depth === numbers.length) {
      if (sum === target) {
        answer++;
      }
      return;
    }

    doSome(sum + numbers[depth], depth + 1);
    doSome(sum - numbers[depth], depth + 1);
  };

  doSome(0, 0);

  return answer;
}

solution([4, 1, 2, 1]);
