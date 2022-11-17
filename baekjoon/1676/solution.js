const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = +require('fs').readFileSync(filePath).toString().trim();

const getMultipleOfFive = (num) => {
  let cnt = 0;
  while (num > 0) {
    if (num % 5 === 0) {
      cnt++;
      num = num / 5;
    } else {
      break;
    }
  }
  return cnt;
};

let answer = 0;
for (let i = input; i >= 5; i--) {
  answer = answer + getMultipleOfFive(i);
}

console.log(answer);
