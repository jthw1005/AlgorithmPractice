/**
 * 최소직사각형
 * https://school.programmers.co.kr/learn/courses/30/lessons/86491
 */

function solution(sizes) {
  const sortedSizes = sizes.map((el) => {
    if (el[0] < el[1]) return [el[1], el[0]];
    else return el;
  });

  let maxWidth = 0;
  let maxHeight = 0;

  sortedSizes.forEach((el) => {
    if (el[0] > maxWidth) maxWidth = el[0];
    if (el[1] > maxHeight) maxHeight = el[1];
  });

  return maxWidth * maxHeight;
}
