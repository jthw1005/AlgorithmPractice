const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [n, input] = require('fs').readFileSync(filePath).toString().trim().split('\n');

const arr = input.split(' ').sort((a, b) => +a - +b);
console.log(arr.reduce((acc, cur, idx) => acc + cur * (n - idx), 0));
