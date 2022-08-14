/**
 * 키패드 누르기
 * https://school.programmers.co.kr/learn/courses/30/lessons/67256
 */

function solution(numbers, hand) {
  const position = {
    L: 10,
    R: 12,
  };

  const newNumbers = numbers.map((el) => {
    let result = '';
    if (el === 1 || el === 4 || el === 7) result = 'L';
    else if (el === 3 || el === 6 || el === 9) result = 'R';
    else {
      if (el === 0) el = 11;
      result = getCloserPosition(position.L - 1, position.R - 1, el - 1);
      if (result === 'same') result = hand[0].toUpperCase();
    }
    position[result] = el;
    return result;
  });

  return newNumbers.join('');
}

function getCloserPosition(posL, posR, posCurr) {
  const distL =
    Math.abs(Math.floor(posL / 3) - Math.floor(posCurr / 3)) + Math.abs((posL % 3) - (posCurr % 3));
  const distR =
    Math.abs(Math.floor(posR / 3) - Math.floor(posCurr / 3)) + Math.abs((posR % 3) - (posCurr % 3));
  return distL === distR ? 'same' : distL < distR ? 'L' : 'R';
}
