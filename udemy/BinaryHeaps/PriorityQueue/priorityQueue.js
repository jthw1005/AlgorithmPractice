class Node {
  constructor(val, priority) {
    this.val = val;
    this.pritority = priority;
  }
}

class PriorityQueue {
  constructor() {
    this.values = [];
  }

  enqueue(val, priority) {
    const newNode = new Node(val, priority);
    this.values.push(newNode);
    this.bubbleUp();
  }

  bubbleUp() {
    let childIdx = this.values.length - 1;
    while (childIdx > 0) {
      const parentIdx = Math.floor((childIdx - 1) / 2);
      if (this.values[childIdx].priority >= this.values[parentIdx].priority) break;
      swap(this.values, childIdx, parentIdx);
      childIdx = parentIdx;
    }
  }

  dequeue() {
    if (this.values.length <= 0) return null;
    swap(this.values, 0, this.values.length - 1);
    const min = this.values.pop();
    this.sinkDown();
    return min;
  }

  sinkDown() {
    let parentIdx = 0;
    const lastIdx = this.values.length - 1;

    while (parentIdx < lastIdx) {
      const childIdxs = [2 * parentIdx + 1, 2 * parentIdx + 2];
      let targetIdx;
      if (childIdxs[0] > lastIdx) break;
      else if (childIdxs[0] === lastIdx) targetIdx = childIdxs[0];
      else
        targetIdx =
          this.values[childIdxs[0]].priority < this.values[childIdxs[1].priority]
            ? childIdxs[0]
            : childIdxs[1];

      if (this.values[parentIdx].priority <= this.values[targetIdx].priority) break;
      swap(this.values, parentIdx, targetIdx);
      parentIdx = targetIdx;
    }
  }
}

const swap = (arr, idx1, idx2) => {
  [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
};
