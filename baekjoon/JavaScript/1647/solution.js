const fp = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [n, ...input] = require('fs')
  .readFileSync(fp)
  .toString()
  .trim()
  .split('\n')
  .map((v) => v.split(' ').map(Number));

const getParent = (x, parent) => {
  if (x === parent[x]) return x;
  else return getParent(parent[x], parent);
};

const unionParent = (x, y, parent) => {
  const parentOfX = getParent(x, parent);
  const parentOfY = getParent(y, parent);
  if (parentOfX < parentOfY) parent[parentOfY] = parentOfX;
  else parent[parentOfX] = parentOfY;
};

const solution = (input, n) => {
  const parent = Array.from({ length: n[0] + 1 }, (_, i) => i);
  let totalCost = 0;
  let maxCost = -Infinity;
  input.sort((n, p) => n[2] - p[2]);

  for (const el of input) {
    const [a, b, cost] = el;
    const parentOfA = getParent(a, parent);
    const parentOfB = getParent(b, parent);

    if (parentOfA === parentOfB) continue;
    unionParent(a, b, parent);
    totalCost += cost;
    if (maxCost < cost) maxCost = cost;
  }

  const finalCost = totalCost - maxCost;

  return finalCost;
};

console.log(solution(input, n));
