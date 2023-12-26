const fp = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [[n, m], ...data] = require('fs')
  .readFileSync(fp)
  .toString()
  .trim()
  .split('\n')
  .map((v) => v.split(' ').map(Number));

let arr = Array.from({ length: n }, (_, i) => i + 1);

for (let i = 0; i < m; i++) {
  const [from, to] = data[i];
  arr = [
    ...arr.slice(0, from - 1),
    ...arr.slice(from - 1, to).reverse(),
    ...arr.slice(to),
  ];
}

console.log(arr.join(' '));
