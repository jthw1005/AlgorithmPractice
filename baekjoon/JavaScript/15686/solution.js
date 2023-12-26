const fp = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [[n, m], ...data] = require('fs')
  .readFileSync(fp)
  .toString()
  .trim()
  .split('\n')
  .map((v) => v.split(' ').map(Number));

// 1. 순회를 하며 치킨집과 일반집 위치를 파악한다.
const home = [];
const chicken = [];
for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (data[i][j] === 1) {
      home.push([i, j]);
    }
    if (data[i][j] === 2) {
      chicken.push([i, j]);
    }
  }
}
// console.log(home, chicken);

// 2. chicken 배열에서 조합을 이용하여 m개의 인덱스를 뽑는다.
const combination = (array, number) => {
  const newArr = [...array];
  if (number === 1) return newArr.map((el) => [el]);
  const resultArray = [];
  while (newArr.length >= number) {
    const temp = newArr.shift();
    const tempArr = combination(newArr, number - 1);
    tempArr.forEach((el, idx) => {
      tempArr[idx].unshift(temp);
      resultArray.push(el);
    });
  }
  return resultArray;
};
const chickenCandidate = combination(chicken, m);
// console.log(chickenCandidate);

// 3. 일반집에서부터 선택된 치킨집까지의 거리 중 최단 거리를 합하여 결과를 낸다.
const answerCandidate = [];
for (let i = 0; i < chickenCandidate.length; i++) {
  let result = 0;
  for (let j = 0; j < home.length; j++) {
    let minDist = Infinity;
    for (let k = 0; k < m; k++) {
      minDist = Math.min(
        minDist,
        Math.abs(home[j][0] - chickenCandidate[i][k][0]) +
          Math.abs(home[j][1] - chickenCandidate[i][k][1])
      );
    }
    result = result + minDist;
  }
  answerCandidate.push(result);
}
console.log(Math.min(...answerCandidate));
