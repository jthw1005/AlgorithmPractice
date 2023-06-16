const fp = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(fp).toString().trim().split('\n');

class Node {
  constructor(val, priority) {
    this.val = val;
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor() {
    this.values = [];
  }

  enqueue(val, priority) {
    const newNode = new Node(val, priority);
    this.values.push(newNode);
    this.bubbleUp();
  }

  bubbleUp() {
    let childIdx = this.values.length - 1;
    while (childIdx > 0) {
      const parentIdx = Math.floor((childIdx - 1) / 2);
      if (this.values[childIdx].priority >= this.values[parentIdx].priority)
        break;
      swap(this.values, childIdx, parentIdx);
      childIdx = parentIdx;
    }
  }

  dequeue() {
    if (this.values.length <= 0) return null;
    swap(this.values, 0, this.values.length - 1);
    const min = this.values.pop();
    this.sinkDown();
    return min;
  }

  sinkDown() {
    let parentIdx = 0;
    const lastIdx = this.values.length - 1;

    while (parentIdx < lastIdx) {
      const childIdxs = [2 * parentIdx + 1, 2 * parentIdx + 2];
      let targetIdx;
      if (childIdxs[0] > lastIdx) break;
      else if (childIdxs[0] === lastIdx) targetIdx = childIdxs[0];
      else
        targetIdx =
          this.values[childIdxs[0]].priority <
          this.values[childIdxs[1]].priority
            ? childIdxs[0]
            : childIdxs[1];

      if (this.values[parentIdx].priority <= this.values[targetIdx].priority)
        break;
      swap(this.values, parentIdx, targetIdx);
      parentIdx = targetIdx;
    }
  }

  size() {
    return this.values.length;
  }
}

const swap = (arr, idx1, idx2) => {
  [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
};

const [v, e] = input[0].split(' ').map(Number);
const k = +input[1];
const data = input.slice(2).map((v) => v.split(' ').map(Number));

const distances = Array.from({ length: v + 1 }, () => Infinity);
const visited = Array.from({ length: v + 1 }, () => false);
const graph = Array.from({ length: v + 1 }, () => []);

for (let i = 0; i < e; i++) {
  const [v1, v2, w] = data[i];
  graph[v1].push([v2, w]);
}

const queue = new PriorityQueue();
queue.enqueue(k, 0);
distances[k] = 0;

while (queue.size()) {
  const currNode = queue.dequeue();

  if (visited[currNode.val] || currNode.priority > graph[currNode.val]) {
    continue;
  }

  visited[currNode.val] = true;

  for (const [neighborNode, neighborCost] of graph[currNode.val]) {
    const cost = currNode.priority + neighborCost;
    if (cost < distances[neighborNode] && !visited[neighborNode]) {
      distances[neighborNode] = cost;
      queue.enqueue(neighborNode, cost);
    }
  }
}

for (let i = 1; i <= v; i++) {
  if (distances[i] === Infinity) {
    distances[i] = 'INF';
  }
}

console.log(distances.slice(1).join('\n'));
