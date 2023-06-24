const fp = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(fp).toString().trim().split('\n');
const [N, M] = input[0].split(' ').map(Number);
const city = input.slice(1, N + 1).map((line) => line.split(' ').map(Number));

let home = [];
let chicken = [];

for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    if (city[i][j] === 1) {
      home.push([i, j]);
    }
    if (city[i][j] === 2) {
      chicken.push([i, j]);
    }
  }
}

const getChickenDistance = (chickens) => {
  let result = 0;

  home.forEach((h) => {
    let min = Number.MAX_SAFE_INTEGER;
    chickens.forEach((c) => {
      let distance = Math.abs(h[0] - c[0]) + Math.abs(h[1] - c[1]);
      min = Math.min(min, distance);
    });
    result += min;
  });

  return result;
};

const combination = (arr, num) => {
  let result = [];
  if (num === 1) return arr.map((v) => [v]);

  arr.forEach((v, idx, arr) => {
    const fixer = v;
    const restArr = arr.slice(idx + 1);
    const combinationArr = combination(restArr, num - 1);
    const combineFix = combinationArr.map((v) => [fixer, ...v]);
    result.push(...combineFix);
  });

  return result;
};

const chickenCombination = combination(chicken, M);
let result = Number.MAX_SAFE_INTEGER;

chickenCombination.forEach((v) => {
  result = Math.min(result, getChickenDistance(v));
});

console.log(result);
