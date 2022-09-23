function selectionSort(arr) {
  const newArr = JSON.parse(JSON.stringify(arr));

  for (let i = 0; i < newArr.length - 1; i++) {
    const idxOfMinVal = newArr.indexOf(Math.min(...newArr.slice(i)));
    if (idxOfMinVal !== i) swap(newArr, idxOfMinVal, i);
  }

  return newArr;
}

const swap = (arr, idx1, idx2) => {
  [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
};

console.log(selectionSort([34, 22, 10, 19, 17]));
