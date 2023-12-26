const fp = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs')
  .readFileSync(fp)
  .toString()
  .trim()
  .split('\n')
  .map((v) => v.split('').map(Number));

const solution = (input) => {
  let answer = null;
  const innerFn = (level) => {
    // exit condition
    if (answer) return;
    if (level === 81) {
      answer = input.map((v) => v.join('')).join('\n');
      return;
    }

    // calculate row & col
    const row = Math.floor(level / 9);
    const col = level % 9;

    // return if it's solved
    if (input[row][col]) return innerFn(level + 1);

    const isOverlap = (val) => {
      for (let i = 0; i < 9; i++) {
        // check row
        if (input[row][i] === val) return true;
        // check col
        if (input[i][col] === val) return true;
        // check association
        if (
          input[Math.floor(row / 3) * 3 + Math.floor(i / 3)][
            Math.floor(col / 3) * 3 + Math.floor(i % 3)
          ] === val
        )
          return true;
      }
      return false;
    };

    // set answer and call recursive function
    for (let i = 0; i < 9; i++) {
      if (isOverlap(i + 1)) continue;
      input[row][col] = i + 1;
      innerFn(level + 1);
      input[row][col] = 0;
    }
  };

  innerFn(0);

  return answer;
};

console.log(solution(input));
