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
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.size++;
  }

  dequeue() {
    const returnNode = this.head;
    if (this.size === 0) {
      return null;
    } else if (this.size === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = returnNode.next;
    }
    this.size--;
    return returnNode;
  }
}

const d = (num) => (num * 2) % 10000;
const s = (num) => (num === 0 ? 9999 : num - 1);
const l = (num) => (num % 1000) * 10 + Math.floor(num / 1000);
const r = (num) => (num % 10) * 1000 + Math.floor(num / 10);

const solution = (start, end) => {
  const queue = new Queue();
  queue.enqueue([start, '']);

  while (queue.size) {
    const [currNum, log] = queue.dequeue();
    console.log(currNum, log);
    if (currNum === end) return log;
    queue.enqueue(
      [d(currNum), log + 'D'],
      [s(currNum), log + 'S'],
      [l(currNum), log + 'L'],
      [r(currNum), log + 'R']
    );
  }
};

const answer = [];

for (let i = 0; i < T; i++) {
  const [start, end] = input[i].split(' ').map(Number);
  answer.push(solution(start, end));
}

console.log(answer.join('\n'));
