const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [n, ...input] = require('fs').readFileSync(filePath).toString().trim().split('\n');

const answer = input
  .map((el) => el.split(' ').map((el) => +el))
  .sort((a, b) => {
    if (a[0] === b[0]) return a[1] - b[1];
    else return a[0] - b[0];
  })
  .map((el) => el.join(' '))
  .join(`\n`);

console.log(answer);
