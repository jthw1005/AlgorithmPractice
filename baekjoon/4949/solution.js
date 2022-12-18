const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');

const parenthesisPair = {
  ')': '(',
  '}': '{',
  ']': '[',
};
const answer = [];

const solution = (str) => {
  const stack = [];

  for (let i = 0; i < str.length; i++) {
    if (str[i] === '(' || str[i] === '{' || str[i] === '[') {
      stack.push(str[i]);
    } else if (str[i] === ')' || str[i] === '}' || str[i] === ']') {
      const top = stack.pop();
      if (top !== parenthesisPair[str[i]]) {
        return false;
      }
    }
  }

  return stack.length === 0 ? true : false;
};

input.forEach((el) => {
  if (el === '.') return;
  const result = solution(el) ? 'yes' : 'no';
  answer.push(result);
});

console.log(answer.join('\n'));
