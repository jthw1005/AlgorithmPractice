const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');

input.shift();

const answer = [];
const gcd = (a, b) => (a % b ? gcd(b, a % b) : b);
const lcm = (a, b) => (a * b) / gcd(a, b);

input.forEach((el) => {
  const [a, b] = el.split(' ').map(Number);
  const result = lcm(a, b);
  answer.push(result);
});

console.log(answer.join('\n'));
