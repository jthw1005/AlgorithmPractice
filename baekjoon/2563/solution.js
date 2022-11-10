const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');

const paperNum = +input[0];
const coordinates = [];
for (let i = 1; i <= paperNum; i++) {
  coordinates.push(input[i].split(' ').map((el) => +el));
}

const arr = Array.from({ length: 100 }, () => Array.from({ length: 100 }, () => false));
let answer = 0;

coordinates.forEach((el) => {
  for (let i = el[0]; i < el[0] + 10; i++) {
    for (let j = el[1]; j < el[1] + 10; j++) {
      if (!arr[i][j]) {
        arr[i][j] = true;
        answer++;
      }
    }
  }
});

console.log(answer);
