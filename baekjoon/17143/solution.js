const fp = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [[mapRow, mapCol, numOfSharks], ...sharkData] = require('fs')
  .readFileSync(fp)
  .toString()
  .trim()
  .split('\n')
  .map(v => v.split(' ').map(Number));

function solution(mapRow, mapCol, numOfSharks, sharkData) {
  let amountOfSharks = 0;

  // sharkData 수정
  sharkData = sharkData.map((v, i) => [...v, i + 1]);

  // map 초기화
  let map = Array.from({ length: mapRow + 1 }, () => new Array(mapCol + 1).fill(null));
  for (const [row, col, speed, direction, size, name] of sharkData) {
    map[row][col] = name;
  }

  // 낚시왕이 1에 위치하고 게임 시작
  for (let fisherManCol = 1; fisherManCol <= mapCol; fisherManCol++) {
    // 맵 내 낚시꾼이 위치한 열에서 땅에 가장 가까운 상어 포획
    for (let i = 1; i <= mapRow; i++) {
      let caughtSharkName = map[i][fisherManCol];
      if (caughtSharkName) {
        // sharkData에서 해당 name 찾고 size 추가 및 제거
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

    // 상어 별 이동 처리
    for (let i = 0; i < sharkData.length; i++) {
      const [row, col, speed, direction, size, name] = sharkData[i];
      if (!name) {
        continue;
      }

      if (direction === 1) {
        // up
        const newSpeed = speed % ((mapRow - 1) * 2);
        if (newSpeed <= row - 1) {
          sharkData[i][0] = row - newSpeed;
        } else if (newSpeed <= row - 1 + mapRow - 1) {
          sharkData[i][0] = 1 + newSpeed - row + 1;
          sharkData[i][3] = 2;
        } else {
          sharkData[i][0] = mapRow - (newSpeed - row + 1 - mapRow + 1);
        }
      } else if (direction === 2) {
        // down
        const newSpeed = speed % ((mapRow - 1) * 2);
        if (newSpeed <= mapRow - row) {
          sharkData[i][0] = row + newSpeed;
        } else if (newSpeed <= mapRow - row + mapRow - 1) {
          sharkData[i][0] = mapRow - newSpeed + mapRow - row;
          sharkData[i][3] = 1;
        } else {
          sharkData[i][0] = 1 + newSpeed - mapRow + row - mapRow + 1;
        }
      } else if (direction === 3) {
        // right
        const newSpeed = speed % ((mapCol - 1) * 2);
        if (newSpeed <= mapCol - col) {
          sharkData[i][1] = col + newSpeed;
        } else if (newSpeed <= mapCol - col + mapCol - 1) {
          sharkData[i][1] = mapCol - newSpeed + mapCol - col;
          sharkData[i][3] = 4;
        } else {
          sharkData[i][1] = 1 + newSpeed - mapCol + col - mapCol + 1;
        }
      } else {
        // left
        const newSpeed = speed % ((mapCol - 1) * 2);
        if (newSpeed <= col - 1) {
          sharkData[i][1] = col - newSpeed;
        } else if (newSpeed <= col - 1 + mapCol - 1) {
          sharkData[i][1] = 1 + newSpeed - col + 1;
          sharkData[i][3] = 3;
        } else {
          sharkData[i][1] = mapCol - (newSpeed - col + 1 - mapCol + 1);
        }
      }

      // map과 동기화
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
