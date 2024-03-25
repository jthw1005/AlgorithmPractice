const fp = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(fp).toString().trim().split('\n');

const [N, M] = input[0].split(' ').map(Number);

const adj = Array.from({ length: N + 1 }, () => []);
const indegree = Array(N + 1).fill(0);

for (let i = 1; i <= M; i++) {
    const [A, B] = input[i].split(' ').map(Number);
    adj[A].push(B);
    indegree[B]++;
}

class MinHeap {
    constructor() {
        this.nodes = [];
    }

    push(data) {
        this.nodes.push(data);
        this.bubbleUp();
    }

    pop() {
        const min = this.nodes[0];
        const end = this.nodes.pop();
        if (this.nodes.length > 0) {
            this.nodes[0] = end;
            this.bubbleDown();
        }
        return min;
    }

    bubbleUp(index = this.nodes.length - 1) {
        if (index < 1) return;

        const curr = this.nodes[index];
        const parentIdx = Math.floor((index - 1) / 2);
        const parent = this.nodes[parentIdx];
        if (parent <= curr) return;

        [this.nodes[index], this.nodes[parentIdx]] = [this.nodes[parentIdx], this.nodes[index]];
        this.bubbleUp(parentIdx);
    }

    bubbleDown(index = 0) {
        const leftIdx = 2 * index + 1;
        const rightIdx = 2 * index + 2;
        const length = this.nodes.length;
        let smallestIdx = index;

        if (leftIdx < length && this.nodes[leftIdx] < this.nodes[smallestIdx]) {
            smallestIdx = leftIdx;
        }
        if (rightIdx < length && this.nodes[rightIdx] < this.nodes[smallestIdx]) {
            smallestIdx = rightIdx;
        }

        if (smallestIdx !== index) {
            [this.nodes[smallestIdx], this.nodes[index]] = [this.nodes[index], this.nodes[smallestIdx]];
            this.bubbleDown(smallestIdx);
        }
    }

    size() {
        return this.nodes.length;
    }
}

const pq = new MinHeap();
const result = [];

for (let i = 1; i <= N; i++) {
    if (indegree[i] === 0) {
        pq.push(i);
    }
}

while (pq.size() > 0) {
    const curr = pq.pop();
    result.push(curr);
    for (const next of adj[curr]) {
        indegree[next]--;
        if (indegree[next] === 0) {
            pq.push(next);
        }
    }
}

console.log(result.join(' '));
