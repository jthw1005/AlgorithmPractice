const fp = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(fp).toString().trim().split('\n');

const n = Number(input[0]);
const inOrder = input[1].split(' ').map(Number);
const postOrder = input[2].split(' ').map(Number);
const inOrderPosition = Array(n + 1).fill(0);

for (let i = 0; i < n; i++) {
  inOrderPosition[inOrder[i]] = i;
}

function getPreOrder(inStart, inEnd, postStart, postEnd, result) {
  if (inStart > inEnd || postStart > postEnd) return;

  const rootValue = postOrder[postEnd];
  result.push(rootValue);

  const rootIdxInOrder = inOrderPosition[rootValue];
  const leftSubtreeSize = rootIdxInOrder - inStart;

  getPreOrder(inStart, rootIdxInOrder - 1, postStart, postStart + leftSubtreeSize - 1, result);
  getPreOrder(rootIdxInOrder + 1, inEnd, postStart + leftSubtreeSize, postEnd - 1, result);
}

const answer = [];
getPreOrder(0, n - 1, 0, n - 1, answer);
console.log(answer.join(' '));
