const fp = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(fp).toString().trim().split('\n');

const [N, K] = input[0].split(' ').map(Number);

const jewels = [];
const bags = [];
let index = 1;

for (let i = 0; i < N; i++, index++) {
    const [M, V] = input[index].split(' ').map(Number);
    jewels.push({ M, V });
}

for (let i = 0; i < K; i++, index++) {
    bags.push(Number(input[index]));
}

// 보석과 가방에 대해, 각각 무게에 대한 오름차순 정렬을 한다.
jewels.sort((a, b) => a.M - b.M);
bags.sort((a, b) => a - b);

let totalValue = 0;

// 우선순위 큐 선언
const pq = [];

const push = value => {
    let idx = pq.length;
    pq.push(value);
    while (idx > 0) {
        let parent = Math.floor((idx - 1) / 2);
        if (pq[parent] >= pq[idx]) break;
        [pq[parent], pq[idx]] = [pq[idx], pq[parent]];
        idx = parent;
    }
};

const pop = () => {
    let ret = pq[0];
    pq[0] = pq[pq.length - 1];
    pq.pop();
    let idx = 0;
    while (true) {
        let left = idx * 2 + 1;
        let right = idx * 2 + 2;
        if (left >= pq.length) break;
        let next = right < pq.length && pq[right] > pq[left] ? right : left;
        if (pq[next] <= pq[idx]) break;
        [pq[next], pq[idx]] = [pq[idx], pq[next]];
        idx = next;
    }
    return ret;
};

let jIndex = 0;

for (const bag of bags) {
    while (jIndex < N && jewels[jIndex].M <= bag) {
        push(jewels[jIndex++].V);
    }
    if (pq.length > 0) {
        totalValue += pop();
    }
}

console.log(totalValue);
