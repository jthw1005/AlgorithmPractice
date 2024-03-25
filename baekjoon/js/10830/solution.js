const fp = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [[n, b], ...input] = require('fs')
    .readFileSync(fp)
    .toString()
    .trim()
    .split('\n')
    .map(v => v.split(' ').map(Number));

const multiplyMatrix = (matrix1, matrix2, postProcessor) => {
    if (matrix1[0].length !== matrix2.length) {
        return null;
    }

    const newRow = matrix1.length;
    const newCol = matrix2[0].length;
    const insideLen = matrix1[0].length;
    const result = Array.from({ length: newRow }, () => new Array(newCol).fill(0));

    let sum;
    for (let i = 0; i < newRow; i++) {
        for (let j = 0; j < newCol; j++) {
            sum = 0;
            for (let k = 0; k < insideLen; k++) {
                sum = sum + matrix1[i][k] * matrix2[k][j];
            }
            if (postProcessor) {
                result[i][j] = postProcessor(sum);
            } else {
                result[i][j] = sum;
            }
        }
    }

    return result;
};

const mod1000 = num => num % 1000;

const solution = (matrix, n) => {
    if (n === 1) return matrix;
    const newArr = multiplyMatrix(matrix, matrix, mod1000);
    if (n % 2) return multiplyMatrix(solution(newArr, (n - 1) / 2), matrix, mod1000);
    else return solution(newArr, n / 2);
};

const data = input.map(vv => vv.map(mod1000));

console.log(
    solution(data, b)
        .map(v => v.join(' '))
        .join('\n')
);
