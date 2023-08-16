const fp = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [T, ...input] = require('fs').readFileSync(fp).toString().trim().split('\n');

for (let i = 0; i < T; i++) {
    const studentCount = +input[i * 2];
    const data = input[i * 2 + 1].split(' ').map(Number);
    data.unshift(null);

    const visited = new Array(studentCount + 1).fill(false);
    const finished = new Array(studentCount + 1).fill(false);

    let cnt = 0;

    function dfs(currNode) {
        visited[currNode] = true;
        const nextNode = data[currNode];

        if (!visited[nextNode]) {
            dfs(nextNode);
        } else if (!finished[nextNode]) {
            for (let i = nextNode; i !== currNode; i = data[i]) {
                cnt++;
            }
            cnt++;
        }

        finished[currNode] = true;
    }

    for (let j = 1; j <= studentCount; j++) {
        if (!visited[j]) {
            dfs(j);
        }
    }

    console.log(studentCount - cnt);
}
