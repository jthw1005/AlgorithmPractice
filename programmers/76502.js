/**
 * 괄호 회전하기
 * https://school.programmers.co.kr/learn/courses/30/lessons/76502
 */

const solution = (s) => {
  const arr = s.split('');
  let cnt = 0;

  for (let i = 0; i < arr.length; i++) {
    if (isParenthesis(arr)) cnt++;
    arr.push(arr.shift());
  }

  return cnt;
};

const isParenthesis = (arr) => {
  const map = {
    '[': ']',
    '{': '}',
    '(': ')',
  };
  const stack = [];

  for (let i = 0; i < arr.length; i++) {
    if (map[arr[i]]) {
      stack.push(arr[i]);
    } else {
      if (map[stack.pop()] !== arr[i]) return false;
    }
  }

  return stack.length === 0;
};
