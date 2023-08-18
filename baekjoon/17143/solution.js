const fp = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [[mapRow, mapCol, numOfSharks], ...sharkData] = require('fs')
    .readFileSync(fp)
    .toString()
    .trim()
    .split('\n')
    .map(v => v.split(' ').map(Number));

const dx = [0, -1, 1, 0, 0];
const dy = [0, 0, 0, 1, -1];

function moveShark(sharkData, mapRow, mapCol) {
    let newPositions = Array.from({ length: mapRow }, () => Array(mapCol).fill(null));

    for (let shark of sharkData) {
        let [x, y, speed, dir, size] = shark;

        for (let s = 0; s < speed; s++) {
            x += dx[dir];
            y += dy[dir];

            if (x < 1 || x > mapRow || y < 1 || y > mapCol) {
                dir = dir % 2 === 0 ? dir - 1 : dir + 1;
                x += 2 * dx[dir];
                y += 2 * dy[dir];
            }
        }

        if (!newPositions[x - 1][y - 1] || newPositions[x - 1][y - 1][4] < size) {
            newPositions[x - 1][y - 1] = [x, y, speed, dir, size];
        }
    }

    const newSharkData = [];
    for (let i = 0; i < mapRow; i++) {
        for (let j = 0; j < mapCol; j++) {
            if (newPositions[i][j]) {
                newSharkData.push(newPositions[i][j]);
            }
        }
    }

    return newSharkData;
}

function solution(mapRow, mapCol, numOfSharks, sharkData) {
    let answer = 0;
    let fisherManPos = 0;

    while (fisherManPos < mapCol) {
        for (let i = 0; i < mapRow; i++) {
            const idx = sharkData.findIndex(shark => shark[0] === i + 1 && shark[1] === fisherManPos + 1);
            if (idx !== -1) {
                answer += sharkData[idx][4];
                sharkData.splice(idx, 1);
                break;
            }
        }
        fisherManPos++;
        sharkData = moveShark(sharkData, mapRow, mapCol);
    }

    return answer;
}

console.log(solution(mapRow, mapCol, numOfSharks, sharkData));
