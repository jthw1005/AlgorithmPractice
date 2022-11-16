const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [n, ...arr] = require('fs').readFileSync(filePath).toString().trim().split('\n');

const input = arr.map((el) => el.split(' ').map((ell) => +ell));
const result = [];
for (let i = 0; i < n; i++) {
  let cnt = 0;
  for (let j = 0; j < n; j++) {
    if (i === j) {
      continue;
    } else if (input[i][0] < input[j][0] && input[i][1] < input[j][1]) {
      cnt++;
    }
  }
  result[i] = cnt + 1;
}

console.log(result.join('\n'));
