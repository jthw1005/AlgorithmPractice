const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [[width, height], ...tomatoField] = require('fs')
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
    this.length = 0;
  }

  enqueue(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
  }

  dequeue() {
    if (!this.head) return null;
    const headNode = this.head;
    this.head = headNode.next ? headNode.next : null;
    this.length > 0 ? this.length-- : 0;
    return headNode.val;
  }
}

const queue = new Queue();
for (let i = 0; i < height; i++) {
  for (let j = 0; j < width; j++) {
    if (tomatoField[i][j] > 0) {
      queue.enqueue([i, j, 0]);
    }
  }
}

let days = 0;
while (queue.length) {
  const [curRow, curCol, day] = queue.dequeue();
  days = Math.max(days, day);
  [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ].forEach(([dr, dc]) => {
    if (
      curRow + dr < 0 ||
      curRow + dr >= height ||
      curCol + dc < 0 ||
      curCol + dc >= width ||
      Math.abs(tomatoField[curRow + dr][curCol + dc])
    ) {
      return;
    }
    queue.enqueue([curRow + dr, curCol + dc, day + 1]);
    tomatoField[curRow + dr][curCol + dc] = 1;
  });
}

for (let i = 0; i < height; i++) {
  for (let j = 0; j < width; j++) {
    if (!tomatoField[i][j]) {
      return console.log(-1);
    }
  }
}

console.log(days);
