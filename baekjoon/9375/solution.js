const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [n, ...input] = require('fs').readFileSync(filePath).toString().trim().split('\n');

const result = [];
for (let i = 0; i < +n; i++) {
  const num = +input.shift();
  const obj = {};
  for (let j = 0; j < num; j++) {
    const [_, type] = input.shift().split(' ');
    obj[type] = obj[type] || 0;
    obj[type]++;
  }
  result.push(Object.keys(obj).reduce((acc, cur) => (acc = acc * (obj[cur] + 1)), 1) - 1);
}

console.log(result.join('\n'));
