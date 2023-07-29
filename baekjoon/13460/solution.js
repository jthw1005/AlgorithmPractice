const fp = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(fp).toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);
const graph = input.slice(1).map(v => v.split(''));
const answer = [];

// find R, B
let redRow, redCol, blueRow, blueCol;
for (let i = 0; i < +n; i++) {
    for (let j = 0; j < +m; j++) {
        if (graph[i][j] === 'R') {
            redRow = i;
            redCol = j;
            graph[i][j] = '.';
        } else if (graph[i][j] === 'B') {
            blueRow = i;
            blueCol = j;
            graph[i][j] = '.';
        }
    }
}

const dr = [-1, 0, 1, 0];
const dc = [0, 1, 0, -1];
const queue = [[redRow, redCol, blueRow, blueCol, 0]];
while (queue.length > 0) {
    const [curRedRow, curRedCol, curBlueRow, curBlueCol, level, prevI] = queue.shift();

    const redTemp = graph[curRedRow][curRedCol];
    const blueTemp = graph[curBlueRow][curBlueCol];

    graph[curRedRow][curRedCol] = 'R';
    graph[curBlueRow][curBlueCol] = 'B';

    // console.table(graph);

    // check up, right, left, down for Red
    for (let i = 0; i < 4; i++) {
        if ((prevI + 2) % 4 === i) {
            continue;
        }
        let nextRedRow = curRedRow;
        let nextRedCol = curRedCol;
        let didRedpassedBlue = false;
        let isRedIntheHole = false;

        // calculate next position for Red
        while (true) {
            // one step forward
            nextRedRow += dr[i];
            nextRedCol += dc[i];

            if (graph[nextRedRow][nextRedCol] === '.') {
                continue;
            } else if (graph[nextRedRow][nextRedCol] === 'O') {
                isRedIntheHole = true;
                break;
            } else if (graph[nextRedRow][nextRedCol] === 'B') {
                didRedpassedBlue = true;
            } else if (graph[nextRedRow][nextRedCol] === '#') {
                if (didRedpassedBlue) {
                    nextRedRow -= dr[i] * 2;
                    nextRedCol -= dc[i] * 2;
                } else {
                    nextRedRow -= dr[i];
                    nextRedCol -= dc[i];
                }
                break;
            } else {
                console.log('wrong input');
                process.exit();
            }
        }

        let nextBlueRow = curBlueRow;
        let nextBlueCol = curBlueCol;
        let didBluepassedRed = false;
        let isBlueIntheHole = false;

        // calculate next position for blue
        while (true) {
            // one step forward
            nextBlueRow += dr[i];
            nextBlueCol += dc[i];
            if (graph[nextBlueRow][nextBlueCol] === '.') {
                continue;
            } else if (graph[nextBlueRow][nextBlueCol] === 'O') {
                isBlueIntheHole = true;
                break;
            } else if (graph[nextBlueRow][nextBlueCol] === 'R') {
                didBluepassedRed = true;
            } else if (graph[nextBlueRow][nextBlueCol] === '#') {
                if (didBluepassedRed) {
                    nextBlueRow -= dr[i] * 2;
                    nextBlueCol -= dc[i] * 2;
                } else {
                    nextBlueRow -= dr[i];
                    nextBlueCol -= dc[i];
                }
                break;
            } else {
                console.log('wrong input');
                process.exit();
            }
        }

        // check whether red, blue moved
        const isRedSamePosition = nextRedRow === curRedRow && nextRedCol === curRedCol;
        const isBlueSamePosition = nextBlueRow === curBlueRow && nextBlueCol === curBlueCol;
        if (isRedSamePosition && isBlueSamePosition) {
            continue;
        }

        // check whether blue in the hole
        if (isBlueIntheHole) {
            continue;
        }

        // check whether only red in the hole
        if (isRedIntheHole) {
            answer.push(level + 1);
        }

        // check whether level exceeded 10
        if (level === 9) {
            continue;
        }

        queue.push([nextRedRow, nextRedCol, nextBlueRow, nextBlueCol, level + 1, i]);
    }

    graph[curRedRow][curRedCol] = redTemp;
    graph[curBlueRow][curBlueCol] = blueTemp;
}

if (answer.length) {
    console.log(Math.min(...answer));
} else {
    console.log(-1);
}
