const fp = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(fp).toString().trim().split('\n');
const [n, m] = input[0].split(' ').map(Number);

const parent = Array.from({ length: n }, (_, i) => i);

const find = (x) => {
  if (parent[x] === x) {
    return x;
  }
  return find(parent[x]);
};

const union = (x, y) => {
  const parentX = find(x);
  const parentY = find(y);
  if (parentX !== parentY) {
    parent[parentY] = parentX;
    return false;
  }
  return true;
};

let cycle = 0;
for (let i = 1; i <= m; i++) {
  const [a, b] = input[i].split(' ').map(Number);
  if (union(a, b)) {
    cycle = i;
    break;
  }
}

console.log(cycle);
