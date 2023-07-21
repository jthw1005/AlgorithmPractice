const fp = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(fp).toString().trim().split('\n');

const tc = +input.shift();

const solution = (n, m, w, graphData, wormholeData) => {
    const graph = Array.from({ length: n + 1 }, () => []);

    for (let i = 0; i < m; i++) {
        const [start, end, dist] = graphData[i].split(' ').map(Number);
        graph[start].push({ to: end, dist });
        graph[end].push({ to: start, dist });
    }

    for (let i = 0; i < w; i++) {
        const [start, end, dist] = wormholeData[i].split(' ').map(Number);
        graph[start].push({ to: end, dist: -dist });
    }

    const distance = Array.from({ length: n + 1 }, () => n * 10000);
    distance[1] = 0;

    let isUpdated;

    for (let i = 0; i <= n; i++) {
        isUpdated = false;
        for (let j = 1; j <= n; j++) {
            for (const { to, dist } of graph[j]) {
                const newDist = distance[j] + dist;
                if (newDist < distance[to]) {
                    if (i === n) return 'YES';
                    distance[to] = newDist;
                    isUpdated = true;
                }
            }
        }
        if (!isUpdated) return 'NO';
    }
};

const answer = [];

for (let i = 0; i < tc; i++) {
    const [n, m, w] = input.shift().split(' ').map(Number);
    const graphData = input.splice(0, m);
    const wormholeData = input.splice(0, w);
    const result = solution(n, m, w, graphData, wormholeData);
    answer.push(result);
}

console.log(answer.join('\n'));
