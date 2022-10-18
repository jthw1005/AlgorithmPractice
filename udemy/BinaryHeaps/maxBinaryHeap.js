class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }

  insert(val) {
    this.values.push(val);
    this.bubbleUp();
  }

  bubbleUp() {
    let childIdx = this.values.length - 1;
    while (childIdx > 0) {
      const parentIdx = Math.floor((childIdx - 1) / 2);
      if (this.values[childIdx] <= this.values[parentIdx]) break;
      swap(this.values, childIdx, parentIdx);
      childIdx = parentIdx;
    }
  }

  extractMax() {
    if (this.values.length <= 0) return null;

    swap(this.values, 0, this.values.length - 1);
    const max = this.values.pop();
    this.sinkDown();

    return max;
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
          this.values[childIdxs[0]] > this.values[childIdxs[1]] ? childIdxs[0] : childIdxs[1];

      if (this.values[parentIdx] >= this.values[targetIdx]) break;
      swap(this.values, parentIdx, targetIdx);
      parentIdx = targetIdx;
    }
  }
}

const swap = (arr, idx1, idx2) => {
  [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
};
