const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [bufferSize, ...input] = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map(Number);

const buffer = [];
input.forEach((el) => {
  if (el === 0) {
    buffer.shift();
  } else if (el === -1) {
    buffer.length === 0 ? console.log('empty') : console.log(buffer.join(' '));
  } else {
    if (buffer.length < bufferSize) {
      buffer.push(el);
    }
  }
});
