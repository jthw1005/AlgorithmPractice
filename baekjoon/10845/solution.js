const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs')
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
    this.front = null;
    this.back = null;
    this.size = 0;
  }

  push(val) {
    const newNode = new Node(val);
    if (!this.front) {
      this.front = newNode;
      this.back = newNode;
    } else {
      this.back.next = newNode;
      this.back = newNode;
    }
    this.size++;
  }

  pop() {
    if (!this.size) return null;
    let tempNode;
    if (this.size === 1) {
      tempNode = this.front;
      this.front = null;
      this.back = null;
    } else {
      tempNode = this.front;
      this.front = this.front.next;
    }
    this.size--;
    return tempNode;
  }

  empty() {
    return this.size ? 0 : 1;
  }
}

const myQ = new Queue();
const answer = [];

input.shift();
input.forEach((op) => {
  const [cmd, arg] = op.split(' ');
  switch (cmd) {
    case 'push':
      myQ.push(arg);
      break;
    case 'pop':
      const n = myQ.pop();
      answer.push(n ? n.val : -1);
      break;
    case 'size':
      answer.push(myQ.size);
      break;
    case 'empty':
      answer.push(myQ.empty());
      break;
    case 'front':
      answer.push(myQ.front ? myQ.front.val : -1);
      break;
    case 'back':
      answer.push(myQ.back ? myQ.back.val : -1);
      break;
    default:
      console.log('wrong command');
  }
});

console.log(answer.join('\n'));
