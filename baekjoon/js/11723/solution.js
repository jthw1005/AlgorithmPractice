const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');

const answer = [];
let mySet = new Set();
input.shift();
input.forEach((op) => {
  const [cmd, arg] = op.split(' ');
  if (cmd === 'add') {
    mySet.add(+arg);
  } else if (cmd === 'remove') {
    mySet.delete(+arg);
  } else if (cmd === 'check') {
    if (mySet.has(+arg)) {
      answer.push(1);
    } else {
      answer.push(0);
    }
  } else if (cmd === 'toggle') {
    if (mySet.has(+arg)) {
      mySet.delete(+arg);
    } else {
      mySet.add(+arg);
    }
  } else if (cmd === 'all') {
    mySet = new Set(Array.from({ length: 20 }, (_, i) => i + 1));
  } else {
    mySet.clear();
  }
});

console.log(answer.join('\n'));
