const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [n, ...input] = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map(Number);

const swap = (arr, idx1, idx2) => {
  [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
};

class Heap {
  constructor() {
    this.data = [];
  }

  insert(val) {
    this.data.push(val);
    this.bubbleUp();
  }

  bubbleUp() {
    let childIdx = this.data.length - 1;
    while (childIdx > 0) {
      const parentIdx = Math.floor((childIdx - 1) / 2);
      if (
        Math.abs(this.data[parentIdx]) < Math.abs(this.data[childIdx]) ||
        (Math.abs(this.data[parentIdx]) === Math.abs(this.data[childIdx]) &&
          this.data[parentIdx] < this.data[childIdx])
      ) {
        break;
      }
      swap(this.data, childIdx, parentIdx);
      childIdx = parentIdx;
    }
  }

  extractMin() {
    if (this.data.length < 1) return 0;
    swap(this.data, 0, this.data.length - 1);
    const min = this.data.pop();
    this.sinkDown();
    return min;
  }

  sinkDown() {
    let parentIdx = 0;
    const lastIdx = this.data.length - 1;
    while (parentIdx < lastIdx) {
      const [leftChildIdx, rightChildIdx] = [
        2 * parentIdx + 1,
        2 * parentIdx + 2,
      ];
      let targetIdx;
      if (leftChildIdx > lastIdx) {
        break;
      } else if (leftChildIdx === lastIdx) {
        targetIdx = leftChildIdx;
      } else {
        if (
          Math.abs(this.data[leftChildIdx]) < Math.abs(this.data[rightChildIdx])
        ) {
          targetIdx = leftChildIdx;
        } else if (
          Math.abs(this.data[leftChildIdx]) > Math.abs(this.data[rightChildIdx])
        ) {
          targetIdx = rightChildIdx;
        } else {
          if (this.data[leftChildIdx] < this.data[rightChildIdx]) {
            targetIdx = leftChildIdx;
          } else {
            targetIdx = rightChildIdx;
          }
        }
      }
      if (Math.abs(this.data[targetIdx]) > Math.abs(this.data[parentIdx])) {
        break;
      } else if (
        Math.abs(this.data[targetIdx]) === Math.abs(this.data[parentIdx]) &&
        this.data[targetIdx] > this.data[parentIdx]
      ) {
        break;
      }
      swap(this.data, parentIdx, targetIdx);
      parentIdx = targetIdx;
    }
  }
}

const myHeap = new Heap();
const answer = [];

input.forEach((el) => {
  if (el === 0) {
    const returnVal = myHeap.extractMin();
    answer.push(returnVal);
  } else {
    myHeap.insert(el);
  }
});

console.log(answer.join('\n'));
