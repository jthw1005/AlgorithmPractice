const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [n, arrN, m, arrM] = require('fs').readFileSync(filePath).toString().trim().split('\n');

const obj = {};
arrN.split(' ').forEach((el) => {
  obj[el] = obj[el] || 0;
  obj[el]++;
});
const resultArr = [];
arrM.split(' ').forEach((el, idx) => {
  if (obj[el]) {
    resultArr[idx] = 1;
  } else {
    resultArr[idx] = 0;
  }
});

console.log(resultArr.join(' '));
