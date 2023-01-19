const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [str1, str2] = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');

const str1Len = str1.length;
const str2Len = str2.length;
const dpTable = Array.from({ length: str1Len + 1 }, () =>
  new Array(str2Len + 1).fill(0)
);

for (let i = 1; i <= str1Len; i++) {
  for (let j = 1; j <= str2Len; j++) {
    if (str1[i - 1] === str2[j - 1]) {
      dpTable[i][j] = dpTable[i - 1][j - 1] + 1;
    } else {
      dpTable[i][j] = Math.max(dpTable[i - 1][j], dpTable[i][j - 1]);
    }
  }
}

console.table(dpTable[str1Len][str2Len]);
