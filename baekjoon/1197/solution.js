const fp = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [n, ...input] = require('fs')
  .readFileSync(fp)
  .toString()
  .trim()
  .split('\n')
  .map((v) => v.split(' ').map(Number));

const getParent = (parent, x) => {
  if (parent[x] === x) {
    return x;
  } else {
    return getParent(parent, parent[x]);
  }
};

const unionParent = (parent, x, y) => {
  const parentOfX = getParent(parent, x);
  const parentOfY = getParent(parent, y);
  if (parentOfX < parentOfY) {
    parent.forEach((el, idx, arr) => {
      if (el === parentOfY) {
        arr[idx] = parentOfX;
      }
    });
  } else {
    parent.forEach((el, idx, arr) => {
      if (el === parentOfX) {
        arr[idx] = parentOfY;
      }
    });
  }
};

const kruskal = (input) => {
  input.sort((n, p) => n[2] - p[2]);
  const parent = Array.from({ length: n[0] + 1 }, (_, i) => i);
  let totalCost = 0;

  for (let i = 0; i < n[1]; i++) {
    const [a, b, cost] = input[i];
    const parentOfA = getParent(parent, a);
    const parentOfB = getParent(parent, b);

    if (parentOfA === parentOfB) continue;
    unionParent(parent, a, b);
    totalCost += cost;
  }

  return totalCost;
};

console.log(kruskal(input));
