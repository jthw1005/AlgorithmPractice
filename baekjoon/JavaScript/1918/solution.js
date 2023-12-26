const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().trim();

/**
 * 알파벳이 나오면, 정답스택에 푸시
 * '('이 나오면, op스택에 푸시
 * ')'이 나오면, op스택에서 '('을 만날 때까지 팝하고 정답스택에 푸시
 * +,-이 나오면, op스택이 비거나 '('을 만날때까지 팝해서 정답스택에 푸시하고 현재 연산자는 op스택에 푸시
 * *,/이 나오면, op스택에 푸시
 * loop가 끝났으면, op스택 전부 팝해서 정답스택에 푸시
 */

const op = [];
const answer = [];

for (let i = 0; i < input.length; i++) {
  const curChar = input[i];
  if (curChar === '(') {
    op.push(curChar);
  } else if (curChar === ')') {
    let topChar = op.pop();
    while (topChar !== '(') {
      answer.push(topChar);
      topChar = op.pop();
    }
  } else if (curChar === '+' || curChar === '-') {
    while (op.length && op[op.length - 1] !== '(') {
      const topChar = op.pop();
      answer.push(topChar);
    }
    op.push(curChar);
  } else if (curChar === '*' || curChar === '/') {
    if (op[op.length - 1] === '*' || op[op.length - 1] === '/') {
      const topChar = op.pop();
      answer.push(topChar);
    }
    op.push(curChar);
  } else {
    answer.push(curChar);
  }
}

while (op.length) {
  const topChar = op.pop();
  answer.push(topChar);
}

console.log(answer.join(''));
