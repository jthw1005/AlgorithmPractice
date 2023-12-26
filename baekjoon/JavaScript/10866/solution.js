const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [n, ...commands] = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');

class Node {
  constructor(val) {
    this.val = val;
    this.prev = null;
    this.next = null;
  }
}

class Deque {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  push_front(val) {
    const newNode = new Node(+val);
    if (this.size === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }
    this.size++;
  }

  push_back(val) {
    const newNode = new Node(+val);
    if (this.size === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.prev = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.size++;
  }

  pop_front() {
    if (this.size === 0) {
      return -1;
    }
    let returnNode = this.head;
    if (this.size === 1) {
      this.head = null;
      this.tail = null;
    } else if (this.size > 1) {
      this.head = this.head.next;
      this.head.prev = null;
    }
    this.size--;
    return returnNode.val;
  }

  pop_back() {
    if (this.size === 0) {
      return -1;
    }
    let returnNode = this.tail;
    if (this.size === 1) {
      this.head = null;
      this.tail = null;
    } else if (this.size > 1) {
      this.tail = this.tail.prev;
      this.tail.next = null;
    }
    this.size--;
    return returnNode.val;
  }

  empty() {
    return this.size ? 0 : 1;
  }

  front() {
    return this.size ? this.head.val : -1;
  }

  back() {
    return this.size ? this.tail.val : -1;
  }
}

const myDeque = new Deque();
const answer = [];
commands.forEach((command) => {
  const [op, arg] = command.split(' ');
  if (op === 'push_front') {
    myDeque.push_front(arg);
  } else if (op === 'push_back') {
    myDeque.push_back(arg);
  } else if (op === 'pop_front') {
    answer.push(myDeque.pop_front());
  } else if (op === 'pop_back') {
    answer.push(myDeque.pop_back());
  } else if (op === 'size') {
    answer.push(myDeque.size);
  } else if (op === 'empty') {
    answer.push(myDeque.empty());
  } else if (op === 'front') {
    answer.push(myDeque.front());
  } else if (op === 'back') {
    answer.push(myDeque.back());
  }
});

console.log(answer.join('\n'));
