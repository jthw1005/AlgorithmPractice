const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [n, ...inputs] = require('fs')
  .readFileSync(filePath)
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

  push(val) {
    const newNode = new Node(val);
    if (!this.size) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.size++;
  }

  pop() {
    if (!this.size) {
      return -1;
    }
    const headNode = this.head;
    this.head = headNode.next;
    this.size--;
    return headNode.val;
  }

  empty() {
    if (!this.size) {
      return 1;
    } else {
      return 0;
    }
  }

  front() {
    if (!this.size) {
      return -1;
    }
    return this.head.val;
  }

  back() {
    if (!this.size) {
      return -1;
    }
    return this.tail.val;
  }
}

const answer = [];
const myQueue = new Queue();

inputs.forEach((input) => {
  const [command, arg] = input.split(' ');
  if (command === 'push') {
    myQueue.push(arg);
  } else if (command === 'pop') {
    answer.push(myQueue.pop());
  } else if (command === 'size') {
    answer.push(myQueue.size);
  } else if (command === 'empty') {
    answer.push(myQueue.empty());
  } else if (command === 'front') {
    answer.push(myQueue.front());
  } else if (command === 'back') {
    answer.push(myQueue.back());
  }
});

console.log(answer.join('\n'));
