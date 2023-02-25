const fp = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs')
  .readFileSync(fp)
  .toString()
  .trim()
  .split('\n')
  .map(Number);

const solution = (input) => {
  let sum = 0;
  for (let i = 0; i < 9; i++) {
    sum += input[i];
  }

  for (let i = 0; i < 9; i++) {
    for (let j = i; j < 9; j++) {
      if (sum - input[i] - input[j] === 100) {
        console.log(
          input
            .filter((_, idx) => idx === i || idx === j)
            .sort((n, p) => n - p)
            .join('\n')
        );
        return;
      }
    }
  }
};

solution(input);
