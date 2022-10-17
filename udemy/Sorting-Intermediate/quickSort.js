function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    const pivotIdx = pivot(arr, left, right);
    quickSort(arr, left, pivotIdx - 1);
    quickSort(arr, pivotIdx + 1, right);
  }
  return arr;
}

const pivot = (arr, start = 0, end = arr.length - 1) => {
  let swapIdx = start;
  const pivot = arr[start];

  for (let i = start + 1; i <= end; i++) {
    if (pivot >= arr[i]) {
      swapIdx++;
      swap(arr, i, swapIdx);
    }
  }

  swap(arr, start, swapIdx);
  return swapIdx;
};

const swap = (arr, idx1, idx2) => {
  [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
};

console.log(quickSort([5, 4, 6, 8, 9, 12, 33, 44, 1]));
