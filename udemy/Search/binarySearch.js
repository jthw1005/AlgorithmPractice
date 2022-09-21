function binarySearch(arr, v) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const tempIdx = Math.floor((left + right) / 2);
    let tempValue = arr[tempIdx];
    if (tempValue === v) return tempIdx;
    else if (tempValue > v) right = tempIdx - 1;
    else left = tempIdx + 1;
  }

  return -1;
}
