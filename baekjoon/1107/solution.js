const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [dest, n, arr] = require('fs').readFileSync(filePath).toString().trim().split('\n');
const CURRENT_CHANNEL = 100;

function solution(dest, n, arr) {
  if (+n === 0) {
    return console.log(Math.min(dest.length, Math.abs(+dest - CURRENT_CHANNEL)));
  } else if (+n === 10) {
    return console.log(Math.abs(+dest - CURRENT_CHANNEL));
  }

  const brokenNums = arr.split(' ');
  const brokenNumsobj = {};
  brokenNums.forEach((brokenNum) => {
    brokenNumsobj[brokenNum] = true;
  });

  const answerCandidates = [];
  const movesWithPlusMinusBtn = Math.abs(+dest - CURRENT_CHANNEL);
  answerCandidates.push(movesWithPlusMinusBtn);

  let move = 0;
  while (move <= movesWithPlusMinusBtn) {
    let lower = +dest - move + '';
    for (let i = 0; i < lower.length && lower >= 0; i++) {
      if (brokenNumsobj[lower[i]] || lower < 0) {
        break;
      }
      if (i === lower.length - 1) {
        answerCandidates.push(lower.length + move);
        move = movesWithPlusMinusBtn + 1;
      }
    }

    let upper = +dest + move + '';
    for (let i = 0; i < upper.length; i++) {
      if (brokenNumsobj[upper[i]]) {
        break;
      }
      if (i === upper.length - 1) {
        answerCandidates.push(upper.length + move);
        move = movesWithPlusMinusBtn + 1;
      }
    }

    move++;
  }

  return console.log(Math.min(...answerCandidates));
}

solution(dest, n, arr);
