const swap = (arr, idx1, idx2) => {
  [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
};

// my
function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let currIdx = i;
    for (let j = i - 1; j >= 0; j--) {
      if (arr[j] > arr[currIdx]) {
        swap(arr, j, currIdx);
        currIdx = j;
      } else break;
    }
  }
  return arr;
}

// colt
function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let currentVal = arr[i];
    for (let j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = currentVal;
  }
  return arr;
}

console.log(insertionSort([34, 22, 10, 19, 17]));
