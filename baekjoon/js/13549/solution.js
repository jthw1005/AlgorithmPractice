const fp = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [n, k] = require('fs')
  .readFileSync(fp)
  .toString()
  .trim()
  .split(' ')
  .map(Number);

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

  size() {
    return this.values.length;
  }

  enqueue(val, priority) {
    const newNode = new Node(val, priority);
    this.values.push(newNode);
    this._bubbleUp();
  }

  dequeue() {
    if (this.values.length <= 0) return null;
    this._swap(0, this.values.length - 1);
    const min = this.values.pop();
    this._sinkDown();
    return min;
  }

  _bubbleUp() {
    let childIdx = this.values.length - 1;
    while (childIdx > 0) {
      const parentIdx = Math.floor((childIdx - 1) / 2);
      if (this.values[childIdx].priority >= this.values[parentIdx].priority)
        break;
      this._swap(childIdx, parentIdx);
      childIdx = parentIdx;
    }
  }

  _sinkDown() {
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
      this._swap(parentIdx, targetIdx);
      parentIdx = targetIdx;
    }
  }

  _swap(idx1, idx2) {
    [this.values[idx1], this.values[idx2]] = [
      this.values[idx2],
      this.values[idx1],
    ];
  }
}

const solution = (n, k) => {
  const visited = Array.from({ length: 100001 }, () => false);
  const times = Array.from({ length: 100001 }, () => Infinity);
  times[n] = 0;

  const queue = new PriorityQueue();
  queue.enqueue(n, 0);

  while (queue.size()) {
    const curNode = queue.dequeue();

    if (visited[curNode.val]) {
      continue;
    }

    visited[curNode.val] = true;

    if (curNode.val === k) {
      return curNode.priority;
    }

    [curNode.val * 2, curNode.val - 1, curNode.val + 1].forEach((nextPos) => {
      if (nextPos < 0 || nextPos > 100000 || visited[nextPos]) {
        return;
      }
      if (nextPos === curNode.val * 2 && curNode.val < k) {
        if (times[nextPos] > curNode.priority) {
          times[nextPos] = curNode.priority;
          queue.enqueue(nextPos, curNode.priority);
        }
      } else if (nextPos === curNode.val + 1 && nextPos < k) {
        if (times[nextPos] > curNode.priority + 1) {
          times[nextPos] = curNode.priority + 1;
          queue.enqueue(nextPos, curNode.priority + 1);
        }
      } else {
        if (times[nextPos] > curNode.priority + 1) {
          times[nextPos] = curNode.priority + 1;
          queue.enqueue(nextPos, curNode.priority + 1);
        }
      }
    });
  }
};

console.log(solution(n, k));
