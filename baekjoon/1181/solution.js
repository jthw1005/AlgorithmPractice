const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().trim();
const [n, ...arr] = input.split('\n');

const mySet = new Set(arr);
const newArr = [...mySet];

console.log(
  newArr
    .sort()
    .sort((a, b) => a.length - b.length)
    .join('\n')
);
