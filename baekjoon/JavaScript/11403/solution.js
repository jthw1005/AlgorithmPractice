const fp = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [n, ...input] = require('fs')
  .readFileSync(fp)
  .toString()
  .trim()
  .split('\n');

const data = input.map((v) => v.split(' ').map(Number));

const graph = Array.from({ length: +n }, (_, i) => []);

for (let i = 0; i < +n; i++) {
  for (let j = 0; j < +n; j++) {
    if (data[i][j]) {
      graph[i].push(j);
    }
  }
}

const answer = Array.from({ length: +n }, () => new Array(+n).fill(0));

for (let i = 0; i < +n; i++) {
  const queue = [...graph[i]];
  while (queue.length) {
    const curVal = queue.shift();
    if (answer[i][curVal]) {
      continue;
    }
    answer[i][curVal] = 1;
    queue.push(...graph[curVal]);
  }
}

console.log(answer.map((v) => v.join(' ')).join('\n'));
