/**
 * 비밀지도
 * https://school.programmers.co.kr/learn/courses/30/lessons/17681
 */

function solution(n, arr1, arr2) {
  const answer = [];

  arr1.forEach((el, idx) => {
    let arr1_Row = arr1[idx].toString(2).padStart(n, `0`);
    let arr2_Row = arr2[idx].toString(2).padStart(n, `0`);
    let mapRow = '';

    for (let i = 0; i < n; i++) {
      if (+arr1_Row[i] + +arr2_Row[i] === 0) mapRow += ' ';
      else mapRow += '#';
    }
    answer.push(mapRow);
  });

  return answer;
}
