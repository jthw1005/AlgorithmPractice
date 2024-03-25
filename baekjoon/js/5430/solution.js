const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [testCase, ...input] = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');

const answer = [];
for (let i = 0; i < +testCase; i++) {
  const cmd = input[i * 3 + 0];
  const num = +input[i * 3 + 1];
  const arr = JSON.parse(input[i * 3 + 2]);

  let isError = false;
  let isReverse = false;
  let [left, right] = [0, num - 1];

  for (let j = 0; j < cmd.length; j++) {
    if (cmd[j] === 'R') {
      isReverse = !isReverse;
    } else if (cmd[j] === 'D') {
      if (left > right) {
        isError = true;
        break;
      } else {
        isReverse ? right-- : left++;
      }
    }
  }

  let result;
  if (isError) {
    result = 'error';
  } else {
    if (isReverse) {
      result = JSON.stringify(arr.slice(left, right + 1).reverse());
    } else {
      result = JSON.stringify(arr.slice(left, right + 1));
    }
  }
  answer.push(result);
}
console.log(answer.join('\n'));
