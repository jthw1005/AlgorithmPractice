const fp = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [[r, c, t], ...data] = require('fs')
    .readFileSync(fp)
    .toString()
    .trim()
    .split('\n')
    .map(v => v.split(' ').map(Number));
const dr = [-1, 0, 1, 0];
const dc = [0, -1, 0, 1];
let originData = data;
let resultData = Array.from({ length: r }, () => new Array(c).fill(0));
let topRow;
let bottomRow;
let answer = 2;
let time = 0;
let originAmount = 0;
let diffusionAmount = 0;
let diffusionArea = 0;
let remain = 0;
let i, j, k;

for (i = 0; i < r; i++) {
    if (data[i][0] === -1) {
        topRow = i;
        bottomRow = i + 1;
        break;
    }
}

while (time < t) {
    time = time + 1;

    // loop origin data and get result data
    // get dust diffusion
    for (i = 0; i < r; i++) {
        for (j = 0; j < c; j++) {
            originAmount = originData[i][j];
            if (originAmount > 4) {
                diffusionAmount = Math.floor(originAmount / 5);
                diffusionArea = 0;

                // check east, west, south, north
                for (k = 0; k < 4; k++) {
                    const [nr, nc] = [i + dr[k], j + dc[k]];
                    if (nr < 0 || nr >= r || nc < 0 || nc >= c || originData[nr][nc] < 0) {
                        continue;
                    }
                    diffusionArea = diffusionArea + 1;
                    resultData[nr][nc] = resultData[nr][nc] + diffusionAmount;
                }

                remain = originAmount - diffusionAmount * diffusionArea;
                resultData[i][j] = resultData[i][j] + remain;
            } else if (originAmount > 0) {
                resultData[i][j] = resultData[i][j] + originAmount;
            }
        }
    }

    // get circulator
    // top
    for (i = topRow; i > 0; i--) {
        resultData[i][0] = resultData[i - 1][0];
    }
    for (i = 0; i < c - 1; i++) {
        resultData[0][i] = resultData[0][i + 1];
    }
    for (i = 0; i < topRow; i++) {
        resultData[i][c - 1] = resultData[i + 1][c - 1];
    }
    for (i = c - 1; i > 0; i--) {
        resultData[topRow][i] = resultData[topRow][i - 1];
    }
    // bottom
    for (i = bottomRow; i < r - 1; i++) {
        resultData[i][0] = resultData[i + 1][0];
    }
    for (i = 0; i < c - 1; i++) {
        resultData[r - 1][i] = resultData[r - 1][i + 1];
    }
    for (i = r - 1; i > bottomRow; i--) {
        resultData[i][c - 1] = resultData[i - 1][c - 1];
    }
    for (i = c - 1; i > 0; i--) {
        resultData[bottomRow][i] = resultData[bottomRow][i - 1];
    }
    resultData[topRow][0] = -1;
    resultData[topRow][1] = 0;
    resultData[bottomRow][0] = -1;
    resultData[bottomRow][1] = 0;

    // init data
    originData = resultData;
    resultData = Array.from({ length: r }, () => new Array(c).fill(0));
}

for (i = 0; i < r; i++) {
    for (j = 0; j < c; j++) {
        answer = answer + originData[i][j];
    }
}

console.log(answer);
