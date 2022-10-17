// my
function selectionSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    const idxOfMinVal = arr.indexOf(Math.min(...arr.slice(i)));
    if (idxOfMinVal !== i) swap(arr, idxOfMinVal, i);
  }

  return arr;
}

// colt
function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let lowest = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[lowest] > arr[j]) {
        lowest = j;
      }
    }
    if (i !== lowest) swap(arr, i, lowest);
  }
  return arr;
}

const swap = (arr, idx1, idx2) => {
  [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
};

console.log(selectionSort([34, 22, 10, 19, 17]));
