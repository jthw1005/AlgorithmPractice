const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [[n, m], ...input] = require('fs')
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
    if (this.size === 0) {
      return null;
    } else {
      const returnNode = this.tail;
      if (this.size === 1) {
        this.head = null;
        this.tail = null;
      } else {
        this.tail = returnNode.next;
      }
      this.size--;
      return returnNode;
    }
  }
}

const obj = { 100: true };
input.forEach((el) => {
  const [start, end] = el;
  obj[start] = end;
});

const visited = new Array(100).fill(false);
visited[0] = true;

// bfs
const queue = new Queue();
queue.enqueue([1, 0]);
let answer = 0;
while (queue.size) {
  let [curPos, level] = queue.dequeue().val;
  if (curPos === 100) {
    answer = level;
    break;
  } else if (obj[curPos]) {
    curPos = obj[curPos];
  }
  [1, 2, 3, 4, 5, 6].forEach((increment) => {
    // 이동할 위치에 사다리 또는 뱀이 있거나 범위 내에 있는 경우
    const newPos = curPos + increment;
    if (newPos <= 100 && !visited[newPos]) {
      queue.enqueue([newPos, level + 1]);
      visited[newPos] = true;
    }
  });
}

console.log(answer);
