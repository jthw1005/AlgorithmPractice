const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [[n, m], ...arr] = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map((v) => v.split(' ').map(Number));

const answer = [];

for (let i = 0; i < n; i++) {
  const row = [];
  for (let j = 0; j < m; j++) {
    row.push(arr[i][j] + arr[i + n][j]);
  }
  answer.push(row.join(' '));
}

console.log(answer.join('\n'));
