const fp = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [[n, m], ...data] = require('fs')
    .readFileSync(fp)
    .toString()
    .trim()
    .split('\n')
    .map(v => v.split(' ').map(Number));
const dr = [-1, 0, 1, 0];
const dc = [0, -1, 0, 1];

const updateAir = meltingCheese => {
    const visited = Array.from({ length: n }, () => new Array(m).fill(false));
    let queue = [];
    if (meltingCheese) {
        meltingCheese.forEach(([r, c]) => {
            queue.push([r, c]);
            visited[r][c] = true;
        });
    } else {
        queue.push([0, 0]);
        visited[0][0] = true;
    }
    while (queue.length) {
        const [curRow, curCol] = queue.pop();
        data[curRow][curCol] = 2;
        for (let i = 0; i < 4; i++) {
            const [nextRow, nextCol] = [curRow + dr[i], curCol + dc[i]];
            if (nextRow < 0 || nextRow >= n || nextCol < 0 || nextCol >= m) continue;
            if (visited[nextRow][nextCol] || data[nextRow][nextCol]) continue;
            queue.push([nextRow, nextCol]);
            visited[nextRow][nextCol] = true;
        }
    }
};

const findMeltingCheese = () => {
    const meltingCheese = [];
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (data[i][j] === 1 && isMelting(i, j)) {
                meltingCheese.push([i, j]);
            }
        }
    }
    return meltingCheese;
};

const isMelting = (row, col) => {
    let airCnt = 0;
    for (let i = 0; i < 4; i++) {
        const [nR, nC] = [row + dr[i], col + dc[i]];
        if (data[nR][nC] === 2) airCnt++;
    }
    if (airCnt >= 2) return true;
    return false;
};

const solution = () => {
    let time = 0;
    updateAir();
    while (true) {
        const meltingCheese = findMeltingCheese();
        if (!meltingCheese.length) break;
        updateAir(meltingCheese);
        time++;
    }
    return time;
};

console.log(solution());
