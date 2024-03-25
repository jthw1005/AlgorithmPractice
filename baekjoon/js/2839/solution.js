const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().trim();

const num = +input;
let cntFive = Math.floor(num / 5);
let cntThree = 0;

while (cntFive >= 0) {
  if ((num - 5 * cntFive) % 3 === 0) {
    cntThree = (num - 5 * cntFive) / 3;
    break;
  } else {
    cntFive--;
  }
}

console.log(cntFive < 0 ? -1 : cntFive + cntThree);
