const fp = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(fp).toString().trim().split('\n');

const tc = +input.shift();

const solution = (n, m, w, graphData, wormholeData) => {
    const graph = Array.from({ length: n + 1 }, () => []);

    for (let i = 0; i < m; i++) {
        const [start, end, cost] = graphData[i].split(' ').map(Number);
        graph[start].push([end, cost]);
        graph[end].push([start, cost]);
    }

    for (let i = 0; i < w; i++) {
        const [start, end, cost] = wormholeData[i].split(' ').map(Number);
        graph[start].push([end, -cost]);
    }

    const bellmanFord = start => {
        const dist = Array.from({ length: n + 1 }, () => Infinity);
        dist[start] = 0;

        let isChanged = false;

        for (let i = 1; i < n; i++) {
            for (let j = 1; j <= n; j++) {
                for (const [neighbor, weight] of graph[j]) {
                    const newDist = dist[j] + weight;
                    if (newDist < dist[neighbor]) {
                        dist[neighbor] = newDist;
                        isChanged = true;
                    }
                }
            }
            if (isChanged) {
                isChanged = false;
            } else {
                return false;
            }
        }

        for (let i = 1; i <= n; i++) {
            for (const [neighbor, weight] of graph[i]) {
                const newDist = dist[i] + weight;
                if (newDist < dist[neighbor]) {
                    return true;
                }
            }
        }

        return false;
    };

    for (let i = 1; i <= n; i++) {
        if (bellmanFord(i)) return 'YES';
    }
    return 'NO';
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
