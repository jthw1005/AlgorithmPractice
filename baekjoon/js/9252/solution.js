const fp = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(fp).toString().trim().split('\n');
const lenA = input[0].length;
const lenB = input[1].length;

const dpTable = Array.from({ length: lenA + 1 }, () =>
  new Array(lenB + 1).fill(0)
);

for (let i = 1; i <= lenA; i++) {
  for (let j = 1; j <= lenB; j++) {
    if (input[0][i - 1] === input[1][j - 1]) {
      dpTable[i][j] = dpTable[i - 1][j - 1] + 1;
    } else {
      dpTable[i][j] = Math.max(dpTable[i][j - 1], dpTable[i - 1][j]);
    }
  }
}

let lcs = '';
let i = lenA;
let j = lenB;
while (i > 0 && j > 0) {
  if (dpTable[i][j] === dpTable[i - 1][j]) {
    i -= 1;
  } else if (dpTable[i][j] === dpTable[i][j - 1]) {
    j -= 1;
  } else {
    lcs = input[0][i - 1] + lcs;
    i -= 1;
    j -= 1;
  }
}

if (dpTable[lenA][lenB]) {
  console.log(dpTable[lenA][lenB] + '\n' + lcs);
} else {
  console.log(dpTable[lenA][lenB]);
}
