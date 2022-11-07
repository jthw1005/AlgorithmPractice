/**
 * 행렬의 곱셈
 * https://school.programmers.co.kr/learn/courses/30/lessons/12949
 */

function solution(arr1, arr2) {
  const answer = Array.from({ length: arr1.length }, () => []);

  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2[0].length; j++) {
      let tempVal = 0;
      for (let k = 0; k < arr2.length; k++) {
        tempVal += arr1[i][k] * arr2[k][j];
      }
      answer[i].push(tempVal);
    }
  }

  return answer;
}

function solution(arr1, arr2) {
  return arr1.map((row) =>
    arr2[0].map((x, y) => row.reduce((acc, cur, idx) => acc + cur * arr2[idx][y], 0))
  );
}
