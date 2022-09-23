function bubbleSort(arr) {
  const newArr = JSON.parse(JSON.stringify(arr));
  for (let i = 0; i < newArr.length - 1; i++) {
    let isSwapHappened = false;
    for (let j = 0; j < newArr.length - 1 - i; j++) {
      if (newArr[j] > newArr[j + 1]) {
        swap(newArr, j, j + 1);
        isSwapHappened = true;
      }
    }
    if (!isSwapHappened) break;
  }
  return newArr;
}

const swap = (arr, idx1, idx2) => {
  [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
};

console.log(bubbleSort([4, 3, 2, 5, 1]));
