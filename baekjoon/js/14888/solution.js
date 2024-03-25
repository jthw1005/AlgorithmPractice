const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const arr = require('fs').readFileSync(filePath).toString().trim().split('\n');

const n = +arr.shift();
const input = arr.shift().split(' ').map(Number);
const operator = arr.shift().split(' ').map(Number);

const result = [];

function innerFunc(num, level) {
  if (level === n) {
    return result.push(num);
  }

  operator.forEach((el, idx, arr) => {
    if (el > 0) {
      let newNum = 0;
      if (idx === 0) {
        newNum = num + input[level];
      } else if (idx === 1) {
        newNum = num - input[level];
      } else if (idx === 2) {
        newNum = num * input[level];
      } else {
        if (num < 0) {
          newNum = -Math.floor(-num / input[level]);
        } else {
          newNum = Math.floor(num / input[level]);
        }
      }
      arr[idx]--;
      innerFunc(newNum, level + 1);
      arr[idx]++;
    }
  });
}

innerFunc(input[0], 1);

const max = Math.max(...result);
const min = Math.min(...result);

console.log(`${max}
${min}`);
