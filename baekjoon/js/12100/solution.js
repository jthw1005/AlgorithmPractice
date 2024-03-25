const fp = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [[N], ...board] = require('fs')
    .readFileSync(fp)
    .toString()
    .trim()
    .split('\n')
    .map(v => v.split(' ').map(Number));

const deepCopy = matrix => {
    return matrix.map(insideArr => [...insideArr]);
};

const rotate = (matrix, degree) => {
    const n = matrix.length;
    const rotatedMatrix = Array.from({ length: n }, () => Array(n).fill(0));

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (degree === 90) {
                rotatedMatrix[j][n - 1 - i] = matrix[i][j];
            } else {
                rotatedMatrix[n - 1 - j][i] = matrix[i][j];
            }
        }
    }

    return rotatedMatrix;
};

/**
 * dir = 0 : 우
 * dir = 1 : 좌
 * dir = 2 : 상
 * dir = 3 : 하
 */
// TODO: if 문으로 나뉘는거 하나로 합칠 것
const move = (dir, currBoard) => {
    const copiedBoard = dir < 2 ? deepCopy(currBoard) : rotate(deepCopy(currBoard), 90);

    for (let i = 0; i < N; i++) {
        const stack = [];
        let isMerged = false;

        if (dir % 2 === 0) {
            for (let j = N - 1; j >= 0; j--) {
                if (!copiedBoard[i][j]) {
                    continue;
                }

                if (isMerged) {
                    stack.push(copiedBoard[i][j]);
                    isMerged = false;
                } else {
                    if (stack.length && stack[stack.length - 1] === copiedBoard[i][j]) {
                        stack[stack.length - 1] = stack[stack.length - 1] * 2;
                        isMerged = true;
                    } else {
                        stack.push(copiedBoard[i][j]);
                    }
                }
            }
            stack.reverse();
        } else {
            for (let j = 0; j < N; j++) {
                if (!copiedBoard[i][j]) {
                    continue;
                }

                if (isMerged) {
                    stack.push(copiedBoard[i][j]);
                    isMerged = false;
                } else {
                    if (stack.length && stack[stack.length - 1] === copiedBoard[i][j]) {
                        stack[stack.length - 1] = stack[stack.length - 1] * 2;
                        isMerged = true;
                    } else {
                        stack.push(copiedBoard[i][j]);
                    }
                }
            }
        }

        while (stack.length < N) {
            if (dir % 2 === 0) {
                stack.unshift(0);
            } else {
                stack.push(0);
            }
        }

        copiedBoard[i] = stack;
    }

    if (dir < 2) {
        return copiedBoard;
    } else {
        return rotate(copiedBoard, 270);
    }
};

const dfs = (count, currBoard) => {
    if (count >= 5) {
        let maxVal = 0;
        for (let i = 0; i < N; i++) {
            for (let j = 0; j < N; j++) {
                maxVal = Math.max(maxVal, currBoard[i][j]);
            }
        }
        return maxVal;
    }

    let result = 0;

    for (let dir = 0; dir < 4; dir++) {
        const nextBoard = move(dir, currBoard);
        result = Math.max(result, dfs(count + 1, nextBoard));
    }
    return result;
};

console.log(dfs(0, board));
