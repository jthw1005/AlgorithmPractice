const fp = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(fp).toString().trim().split('\n');

const n = +input[0];
const m = +input[1];

const [start, end] = input[m + 2].split(' ').map(Number);
const graph = Array.from({ length: n + 1 }, () => ({}));
for (let i = 2; i < 2 + m; i++) {
    const [from, to, dist] = input[i].split(' ').map(Number);
    if (graph[from][to]) {
        graph[from][to] = Math.min(graph[from][to], dist);
    } else {
        graph[from][to] = dist;
    }
}

const visited = Array.from({ length: n + 1 }, () => false);
const trace = Array.from({ length: n + 1 }, () => null);
const distances = Array.from({ length: n + 1 }, () => Infinity);
distances[start] = 0;

let minCity = start;
while (minCity) {
    visited[minCity] = true;
    for (const neighbor in graph[minCity]) {
        const newDist = distances[minCity] + graph[minCity][neighbor];
        if (newDist < distances[neighbor]) {
            distances[neighbor] = newDist;
            trace[neighbor] = minCity;
        }
    }
    minCity = findMinIdx(distances, visited);
}

const path = [end];
let curr = end;
while (curr !== start) {
    path.push(trace[curr]);
    curr = trace[curr];
}

console.log(distances[end]);
console.log(path.length);
console.log(path.reverse().join(' '));

function findMinIdx(distances, visited) {
    let minIdx = null;
    for (let i = 1; i < visited.length; i++) {
        if (!visited[i] && (minIdx === null || distances[minIdx] > distances[i])) {
            minIdx = i;
        }
    }
    return minIdx;
}
