const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map((el) => +el);

const testCase = input.shift();
const solution = (k, n) => {
  if (k === 0) return n;
  let answer = 0;
  for (let i = 1; i <= n; i++) {
    answer += solution(k - 1, i);
  }
  return answer;
};

for (let i = 0; i < testCase; i++) {
  console.log(solution(input[2 * i], input[2 * i + 1]));
}
