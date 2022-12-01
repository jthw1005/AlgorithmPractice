const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const sudoku = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map((v) => v.split(' ').map(Number));

function solution(sudoku) {
  const blank = [];
  sudoku.forEach((rowNums, row) => {
    rowNums.forEach((num, col) => {
      if (num === 0) {
        blank.push([row, col]);
      }
    });
  });

  function recursiveFunc(level) {
    // terminate condition
    if (level === blank.length) {
      console.log(sudoku.map((v) => v.join(' ')).join('\n'));
      isFinished = true;
      process.exit();
    }

    // calculate candidates
    const candidates = new Array(10).fill(true);
    const [row, col] = blank[level];
    for (let i = 0; i < 9; i++) {
      candidates[sudoku[row][i]] = false;
      candidates[sudoku[i][col]] = false;
    }
    const leftBoundary = col - (col % 3);
    const upperBoundary = row - (row % 3);
    for (let s = leftBoundary; s < leftBoundary + 3; s++) {
      for (let t = upperBoundary; t < upperBoundary + 3; t++) {
        candidates[sudoku[t][s]] = false;
      }
    }

    // call fn
    candidates.forEach((candidate, idx) => {
      if (!candidate) {
        return;
      }
      sudoku[row][col] = idx;
      recursiveFunc(level + 1);
      sudoku[row][col] = 0;
    });
  }

  recursiveFunc(0);
}

solution(sudoku);
