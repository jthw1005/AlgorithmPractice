const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');

const testCase = +input[0];
const arr = input.slice(1);
const isGroupWord = (str) => {
  const obj = {};
  obj[str[0]] = 1;

  for (let i = 1; i < str.length; i++) {
    if (str[i] !== str[i - 1]) {
      if (obj[str[i]] === -1) return false;
      else {
        obj[str[i - 1]] = -1;
        obj[str[i]] = 1;
      }
    }
  }

  return true;
};
let answer = 0;

for (let i = 0; i < testCase; i++) {
  if (isGroupWord(arr[i])) answer++;
}

console.log(answer);
