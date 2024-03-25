const fp = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [[mapRow, mapCol, numOfSharks], ...sharkData] = require('fs')
  .readFileSync(fp)
  .toString()
  .trim()
  .split('\n')
  .map(v => v.split(' ').map(Number));

function calNextPos(border, curPos, direction, speed) {
  let rotateCnt = 0;
  let d;

  if (direction === 1 || direction === 4) d = -1;
  else d = 1;

  while (speed > 0) {
    if ((curPos === 1 && d === -1) || (curPos === border && d === 1)) {
      d = d * -1;
      rotateCnt++;
    }
    curPos = curPos + d;
    speed--;
  }

  return [curPos, !!(rotateCnt % 2)];
}

function solution(mapRow, mapCol, numOfSharks, sharkData) {
  let amountOfSharks = 0;

  sharkData = sharkData.map(([r, c, s, d, z], i) => {
    return [r, c, d < 3 ? s % ((mapRow - 1) * 2) : s % ((mapCol - 1) * 2), d, z, i + 1];
  });

  let map = Array.from({ length: mapRow + 1 }, () => new Array(mapCol + 1).fill(null));
  for (const [row, col, speed, direction, size, name] of sharkData) {
    map[row][col] = name;
  }

  for (let fisherManCol = 1; fisherManCol <= mapCol; fisherManCol++) {
    for (let i = 1; i <= mapRow; i++) {
      let caughtSharkName = map[i][fisherManCol];
      if (caughtSharkName) {
        for (let j = 0; j < sharkData.length; j++) {
          if (sharkData[j][5] === caughtSharkName) {
            amountOfSharks += sharkData[j][4];
            sharkData[j][5] = null;
            break;
          }
        }
        break;
      }
    }

    map = Array.from({ length: mapRow + 1 }, () => new Array(mapCol + 1).fill(null));

    for (let i = 0; i < sharkData.length; i++) {
      const [row, col, speed, direction, size, name] = sharkData[i];
      if (!name) continue;

      if (direction === 1) {
        const [newPos, isRotate] = calNextPos(mapRow, row, direction, speed);
        sharkData[i][0] = newPos;
        if (isRotate) sharkData[i][3] = 2;
      } else if (direction === 2) {
        const [newPos, isRotate] = calNextPos(mapRow, row, direction, speed);
        sharkData[i][0] = newPos;
        if (isRotate) sharkData[i][3] = 1;
      } else if (direction === 3) {
        const [newPos, isRotate] = calNextPos(mapCol, col, direction, speed);
        sharkData[i][1] = newPos;
        if (isRotate) sharkData[i][3] = 4;
      } else {
        const [newPos, isRotate] = calNextPos(mapCol, col, direction, speed);
        sharkData[i][1] = newPos;
        if (isRotate) sharkData[i][3] = 3;
      }

      const sharkName = map[sharkData[i][0]][sharkData[i][1]];
      if (sharkName) {
        for (let j = 0; j < sharkData.length; j++) {
          if (sharkData[j][5] === sharkName) {
            if (sharkData[j][4] < sharkData[i][4]) {
              map[sharkData[i][0]][sharkData[i][1]] = sharkData[i][5];
              sharkData[j][5] = null;
            } else {
              sharkData[i][5] = null;
            }
          }
        }
      } else {
        map[sharkData[i][0]][sharkData[i][1]] = sharkData[i][5];
      }
    }
  }

  return amountOfSharks;
}

const answer = solution(mapRow, mapCol, numOfSharks, sharkData);
console.log(answer);
