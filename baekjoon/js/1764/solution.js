const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [[n, m], ...arr] = require('fs').readFileSync(filePath).toString().trim().split('\n');

const obj = {};
arr.forEach((el) => {
  obj[el] = obj[el] || 0;
  obj[el]++;
});

const answer = [];
for (let key in obj) {
  if (obj[key] === 2) {
    answer.push(key);
  }
}

console.log(answer.length + '\n' + answer.sort().join('\n'));
