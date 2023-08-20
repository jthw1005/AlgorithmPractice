const fp = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(fp).toString().trim().split('\n');

const [N, M, K] = input[0].split(' ').map(Number);
const cards = input[1]
  .split(' ')
  .map(Number)
  .sort((a, b) => a - b);
const calls = input[2].split(' ').map(Number);

const parent = [...Array(M + 1)].map((_, idx) => idx);

const find = x => {
  if (parent[x] === x) return x;
  return (parent[x] = find(parent[x]));
};

for (let call of calls) {
  const idx = lowerBound(cards, call);
  const actualIdx = find(idx);
  console.log(cards[actualIdx]);
  parent[actualIdx] = actualIdx + 1;
}

function lowerBound(arr, target) {
  let low = 0,
    high = arr.length;

  while (low < high) {
    const mid = Math.floor((low + high) / 2);
    if (arr[mid] <= target) {
      low = mid + 1;
    } else {
      high = mid;
    }
  }

  return low;
}
