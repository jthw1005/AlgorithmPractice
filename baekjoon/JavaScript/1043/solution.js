const fp = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs')
    .readFileSync(fp)
    .toString()
    .trim()
    .split('\n')
    .map(v => v.split(' ').map(Number));

const [n, m] = input[0];
const peopleWhoKnowTruth = input[1].slice(1);
const data = input.slice(2).map(v => v.slice(1));
const parent = Array.from({ length: n + 1 }, (_, i) => i);

const findParent = x => {
    if (parent[x] === x) return x;
    return findParent(parent[x]);
};

const unionParent = (x, y) => {
    const parentX = findParent(x);
    const parentY = findParent(y);
    if (parentX !== parentY) {
        parent[parentY] = parentX;
    }
};

const doSome = arr => {
    for (let i = 0; i < arr.length - 1; i++) {
        unionParent(arr[i], arr[i + 1]);
    }
};

doSome(peopleWhoKnowTruth);

for (let i = 0; i < data.length; i++) {
    if (data[i].length > 1) {
        doSome(data[i]);
    }
}

let cnt = 0;
let isOk;
for (let i = 0; i < data.length; i++) {
    isOk = true;
    for (let j = 0; j < data[i].length; j++) {
        if (findParent(data[i][j]) === findParent(peopleWhoKnowTruth[0])) {
            isOk = false;
            break;
        }
    }
    if (isOk) cnt++;
}

console.log(cnt);
