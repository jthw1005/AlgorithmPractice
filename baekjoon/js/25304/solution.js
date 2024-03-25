const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [total, n, ...arr] = require('fs').readFileSync(filePath).toString().trim().split('\n');

const input = arr.map((el) => el.split(' '));

const temp = input.reduce((acc, cur) => acc + +cur[0] * +cur[1], 0);
if (temp === +total) {
  console.log('Yes');
} else {
  console.log('No');
}
