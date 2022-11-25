const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [n, radius] = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map((v) => v.split(' ').map(Number));

const getGCD = (a, b) => {
  while (b) {
    const temp = b;
    b = a % b;
    a = temp;
  }
  return a;
};

const standard = radius.shift();
const result = [];

radius.forEach((el) => {
  const gcd = getGCD(standard, el);
  result.push(`${standard / gcd}/${el / gcd}`);
});

console.log(result.join('\n'));
