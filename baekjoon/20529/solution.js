const fp = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(fp).toString().trim().split('\n');
const T = +input[0];

const getDistance = (str1, str2) => {
  let cnt = 0;
  for (let i = 0; i < 4; i++) {
    if (str1[i] !== str2[i]) {
      cnt++;
    }
  }
  return cnt;
};

const solution = (n, data) => {
  const distances = Array.from({ length: n }, () =>
    Array.from({ length: n }, () => -1)
  );
  const result = [];

  for (i = 0; i < n - 2; i++) {
    for (j = i + 1; j < n - 1; j++) {
      for (k = j + 1; k < n; k++) {
        if (distances[i][j] < 0) {
          const tempDist = getDistance(data[i], data[j]);
          distances[i][j] = tempDist;
          distances[j][i] = tempDist;
        }
        if (distances[i][k] < 0) {
          const tempDist = getDistance(data[i], data[k]);
          distances[i][k] = tempDist;
          distances[k][i] = tempDist;
        }
        if (distances[j][k] < 0) {
          const tempDist = getDistance(data[j], data[k]);
          distances[j][k] = tempDist;
          distances[k][j] = tempDist;
        }
        result.push(distances[i][j] + distances[i][k] + distances[j][k]);
      }
    }
  }

  return Math.min(...result);
};

const answer = [];

for (let i = 0; i < T; i++) {
  const n = input[i * 2 + 1];
  const data = input[i * 2 + 2].split(' ');
  const result = solution(n, data);
  answer.push(result);
}

console.log(answer.join('\n'));
