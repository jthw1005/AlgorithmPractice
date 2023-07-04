const fp = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [n, ...input] = require('fs')
  .readFileSync(fp)
  .toString()
  .trim()
  .split('\n');

const result = [];
input.forEach((el) => {
  result.push(`${el[0]}${el[el.length - 1]}`);
});
console.log(result.join('\n'));
