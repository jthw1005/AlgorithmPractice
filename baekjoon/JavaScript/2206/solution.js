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

const [row, col] = input.shift().split(' ').map(Number);
const graph = input.map((v) => v.split('').map(Number));

const solution = (graph, row, col) => {
  const queue = new Queue();
  // set start point and check visit.
  queue.enqueue([0, 0, 0, true]); // [curRow, curCol, distance, isBreakAvailable]
  graph[0][0] = -1;

  while (queue.size) {
    const [curRow, curCol, distance, isBreakAvailable] = queue.dequeue().val;
    // terminate if current position is the destination.
    if (curRow + 1 === row && curCol + 1 === col) {
      return distance + 1;
    }

    // check where to go next.
    [
      [0, 1],
      [0, -1],
      [1, 0],
      [-1, 0],
    ].forEach(([dr, dc]) => {
      // set next position
      const nextRow = curRow + dr;
      const nextCol = curCol + dc;

      // terminate if nextPos out of range.
      if (nextRow < 0 || nextRow >= row || nextCol < 0 || nextCol >= col) {
        return;
      }

      if (isBreakAvailable) {
        if (graph[nextRow][nextCol] === 0 || graph[nextRow][nextCol] === 2) {
          queue.enqueue([nextRow, nextCol, distance + 1, isBreakAvailable]);
          graph[nextRow][nextCol] = -2;
        } else if (Math.abs(graph[nextRow][nextCol]) === 1) {
          queue.enqueue([nextRow, nextCol, distance + 1, !isBreakAvailable]);
          graph[nextRow][nextCol] = -1;
        }
      } else {
        if (graph[nextRow][nextCol] === 0) {
          queue.enqueue([nextRow, nextCol, distance + 1, isBreakAvailable]);
          graph[nextRow][nextCol] = 2;
        }
      }
    });
  }

  return -1;
};

console.log(solution(graph, row, col));
