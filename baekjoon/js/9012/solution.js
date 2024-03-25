const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');

input.shift();

const isParenthesis = (str) => {
  const stack = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] === '(') {
      stack.push(str[i]);
    } else {
      if (!stack.length) {
        return 'NO';
      }
      stack.pop();
    }
  }

  return stack.length === 0 ? 'YES' : 'NO';
};

const answer = [];

input.forEach((el) => {
  answer.push(isParenthesis(el));
});

console.log(answer.join('\n'));
