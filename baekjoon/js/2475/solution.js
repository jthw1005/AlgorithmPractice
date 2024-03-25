const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().trim();

const arr = input.split(' ');
console.log(arr.reduce((acc, cur) => acc + cur ** 2, 0) % 10);
