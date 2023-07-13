const fp = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [start, end] = require('fs').readFileSync(fp).toString().trim().split(' ').map(Number);

let minTime = Infinity;
let pathCount = 0;

const findPaths = (startPos, endPos, timeElapsed) => {
    if (endPos <= startPos) {
        if (minTime > timeElapsed + startPos - endPos) {
            minTime = timeElapsed + startPos - endPos;
            pathCount = 1;
        } else if (minTime === timeElapsed + startPos - endPos) {
            pathCount++;
        }
    } else {
        if (endPos % 2 === 0) {
            findPaths(startPos, endPos / 2, timeElapsed + 1);
            findPaths(startPos, startPos, timeElapsed + endPos - startPos);
        } else {
            findPaths(startPos, endPos - 1, timeElapsed + 1);
            findPaths(startPos, endPos + 1, timeElapsed + 1);
        }
    }
};

if (start === 0) {
    findPaths(1, end, 1);
} else {
    findPaths(start, end, 0);
}

console.log(`${minTime}\n${pathCount}`);
