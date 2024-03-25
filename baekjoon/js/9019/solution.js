const fp = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [T, ...input] = require('fs')
  .readFileSync(fp)
  .toString()
  .trim()
  .split('\n');

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
    if (!this.size) {
      this.head = newNode;
    } else {
      this.tail.next = newNode;
    }
    this.tail = newNode;
    this.size++;
  }

  dequeue() {
    if (!this.size) return null;
    const returnNode = this.head;
    if (this.size === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
    }
    this.size--;
    return returnNode.val;
  }
}

const d = (num) => (num * 2) % 10000;
const s = (num) => (num === 0 ? 9999 : num - 1);
const l = (num) => (num % 1000) * 10 + Math.floor(num / 1000);
const r = (num) => (num % 10) * 1000 + Math.floor(num / 10);

const solution = (start, end) => {
  const queue = new Queue();
  const visited = Array(10000).fill(false);

  queue.enqueue([start, '']);
  visited[start] = true;

  while (queue.size) {
    const [currNum, log] = queue.dequeue();
    if (currNum === end) return log;

    const nextNumbers = [d(currNum), s(currNum), l(currNum), r(currNum)];
    const nextLogs = ['D', 'S', 'L', 'R'];

    for (let i = 0; i < 4; i++) {
      if (!visited[nextNumbers[i]]) {
        visited[nextNumbers[i]] = true;
        queue.enqueue([nextNumbers[i], log + nextLogs[i]]);
      }
    }
  }
};

const answer = [];

for (let i = 0; i < T; i++) {
  const [start, end] = input[i].split(' ').map(Number);
  answer.push(solution(start, end));
}

console.log(answer.join('\n'));
