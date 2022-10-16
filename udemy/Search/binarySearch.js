function binarySearch(arr, val) {
  let leftIdx = 0;
  let rightIdx = arr.length - 1;

  while (leftIdx <= rightIdx) {
    const middleIdx = Math.floor((leftIdx + rightIdx) / 2);
    let middleValue = arr[middleIdx];
    if (middleValue === val) return middleIdx;
    else if (middleValue > val) rightIdx = middleIdx - 1;
    else leftIdx = middleIdx + 1;
  }

  return -1;
}
