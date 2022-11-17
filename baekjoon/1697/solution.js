const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [n, k] = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(' ')
  .map((el) => +el);
const obj = {
  n: true,
};

const queue = [[n, 0]];
while (queue.length) {
  const [val, cnt] = queue.shift();
  if (val === k) {
    return console.log(cnt);
  } else {
    [val - 1, val + 1, val * 2].forEach((el) => {
      if (!obj[el] && el >= 0 && el <= 100_000) {
        obj[el] = true;
        queue.push([el, cnt + 1]);
      }
    });
  }
}
