const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [[col, row, height], ...input] = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map((v) => v.split(' ').map(Number));

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  enqueue(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.next = newNode;
      this.head = newNode;
    }
    this.size++;
  }

  dequeue() {
    if (!this.tail) return null;
    const tailNode = this.tail;
    if (this.size === 1) {
      this.head = null;
      this.tail = null;
    } else if (this.size >= 2) {
      this.tail = tailNode.next;
    }
    this.size > 0 ? this.size-- : (this.size = 0);
    return tailNode;
  }
}

// 3d array 만들기
const graph = [];
for (let i = 0; i < height; i++) {
  graph.push(input.slice(i * row, (i + 1) * row));
}

// 1인 곳 수집하기
const queue = new Queue();
for (let i = 0; i < height; i++) {
  for (let j = 0; j < row; j++) {
    for (let k = 0; k < col; k++) {
      if (graph[i][j][k] === 1) {
        queue.enqueue([i, j, k, 0]);
      }
    }
  }
}

// 본 로직
let result = 0;
while (queue.size) {
  const [z, y, x, lvl] = queue.dequeue().val;
  result = Math.max(result, lvl);
  [
    [-1, 0, 0],
    [1, 0, 0],
    [0, -1, 0],
    [0, 1, 0],
    [0, 0, -1],
    [0, 0, 1],
  ].forEach(([dx, dy, dz]) => {
    if (
      dx + x < 0 ||
      dx + x >= col ||
      dy + y < 0 ||
      dy + y >= row ||
      dz + z < 0 ||
      dz + z >= height ||
      graph[dz + z][dy + y][dx + x]
    ) {
      return;
    }

    queue.enqueue([dz + z, dy + y, dx + x, lvl + 1]);
    graph[dz + z][dy + y][dx + x] = 1;
  });
}

for (let i = 0; i < height; i++) {
  for (let j = 0; j < row; j++) {
    for (let k = 0; k < col; k++) {
      if (graph[i][j][k] === 0) {
        result = -1;
        break;
      }
    }
  }
}

console.log(result);
