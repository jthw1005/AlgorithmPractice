class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    const newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.length++;

    return this;
  }

  pop() {
    if (!this.head) return undefined;

    let current = this.head;

    while (current.next) {
      this.tail = current;
      current = current.next;
    }

    this.tail.next = null;
    this.length--;

    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }

    return current;
  }

  shift() {
    if (!this.head) return undefined;
    const currentHead = this.head;
    this.head = currentHead.next();
    this.length--;
    if (this.length === 0) this.tail = null;
    return currentHead;
  }

  unshift(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  get(idx) {
    if (idx < 0 || idx >= this.length) return null;
    let result = this.head;
    while (idx > 0) {
      result = result.next;
      idx--;
    }
    return result;
  }

  set(idx, val) {
    const targetNode = this.get(idx);
    if (targetNode) {
      targetNode.val = val;
      return true;
    }
    return false;
  }

  insert(idx, val) {
    if (idx < 0 || idx > this.length) return false;
    else if (idx === this.length) return !!this.push(val);
    else if (idx === 0) !!this.unshift(val);

    const newNode = new Node(val);
    const prevNode = this.get(idx - 1);

    newNode.next = prevNode.next;
    prevNode.next = newNode;

    this.length++;
    return true;
  }

  remove(idx) {
    if (idx < 0 || idx >= this.length) return undefined;
    else if (idx === this.length - 1) return this.pop();
    else if (idx === 0) !!this.shift();

    const prevNode = this.get(idx - 1);
    const removedNode = prevNode.next;
    prevNode.next = removedNode.next;

    this.length--;
    return removedNode;
  }

  reverse() {
    let currNode = this.head;
    this.head = this.tail;
    this.tail = currNode;

    let nextNode;
    let prevNode = null;

    for (let i = 0; i < this.length; i++) {
      nextNode = currNode.next;
      currNode.next = prevNode;
      prevNode = currNode;
      currNode = nextNode;
    }

    return this;
  }

  printValue() {
    const arr = [];
    let curr = this.head;
    while (curr) {
      arr.push(curr.val);
      curr = curr.next;
    }
    console.log(arr);
  }
}

const list = new SinglyLinkedList();
list.push('hello');
list.push('goodbye');
