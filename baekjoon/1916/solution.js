const fp = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(fp).toString().trim().split('\n');

const n = +input.splice(0, 1)[0];
const m = +input.splice(0, 1)[0];
const [startPoint, endPoint] = input.splice(-1)[0].split(' ').map(Number);

const visited = Array.from({ length: n + 1 }, () => false);
const candidateArr = [];

const graph = Array.from({ length: n + 1 }, () => ({}));
for (let data of input) {
  const [source, destination, cost] = data.split(' ').map(Number);
  graph[source][`${destination}`] = cost;
}

const recursiveFn = (currPoint, accTime) => {
  if (currPoint == endPoint) {
    candidateArr.push(accTime);
    return;
  }

  for (let neighbor in graph[currPoint]) {
    if (visited[neighbor]) {
      continue;
    }
    visited[neighbor] = true;
    recursiveFn(neighbor, accTime + graph[currPoint][`${neighbor}`]);
    visited[neighbor] = false;
  }

  return;
};

recursiveFn(startPoint, 0);

console.log(Math.min(...candidateArr));
