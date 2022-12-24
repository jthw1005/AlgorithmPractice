const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');

const n = +input.shift();
input.shift();
const edges = input.map((v) => v.split(' ').map(Number));

const vertices = {};
edges.forEach((edge) => {
  const [v1, v2] = edge;
  vertices[v1] = vertices[v1] || [];
  vertices[v1].push(v2);
  vertices[v2] = vertices[v2] || [];
  vertices[v2].push(v1);
});

const virus = {};

const stack = [1];
while (stack.length) {
  const curVertex = stack.pop();
  virus[curVertex] = true;
  vertices[curVertex].forEach((vertex) => {
    if (!virus[vertex]) {
      stack.push(vertex);
    }
  });
}

console.log(Object.keys(virus).length - 1);
