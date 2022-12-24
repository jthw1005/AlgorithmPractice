const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');

const n = +input.shift();
const lines = input.map((v) => v.split(' ').map(Number));
const nodes = Array.from({ length: n }, () => []);

lines.forEach((line) => {
  const [n1, n2] = line;
  nodes[n1 - 1].push(n2);
  nodes[n2 - 1].push(n1);
});

const answer = new Array(n - 1);
const visited = new Array(n).fill(false);

const queue = [1];
while (queue.length) {
  const curNode = queue.shift();
  visited[curNode - 1] = true;
  nodes[curNode - 1].forEach((node) => {
    if (!visited[node - 1]) {
      answer[node - 2] = curNode;
      queue.push(node);
    }
  });
}

console.log(answer.join('\n'));
