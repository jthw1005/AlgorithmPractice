const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');

let [h, m] = input[0].split(' ').map((el) => +el);
const cookTime = +input[1];
h = (h + Math.floor((m + cookTime) / 60)) % 24;
m = (m + cookTime) % 60;

console.log(`${h} ${m}`);
