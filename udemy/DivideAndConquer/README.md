# Divide and Conquer

## Feature

- Divide and Conquer는 Data Set을 더 작은 Chunk로 나누고 그 Chunk에서 Process를 반복하는 패턴이다.
- 이 패턴은 시간 복잡도를 효과적으로 줄여줄 수 있다.
- 대표적인 예시로 Binary Search가 있다.

---

## Example

Given a sorted array of integers, write a function called search, that accepts a value and returns the index where the value passed to the function is located. If the value is not found, return -1.

### Solution1 - O(N)

```js
function search(arr, val) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) {
      return i;
    }
  }
  return -1;
}
```

### Solution2 - Divide and Conquer(O(logN))

```js
function search(array, val) {
  let min = 0;
  let max = array.length - 1;
  while (min <= max) {
    let middle = Math.floor((min + max) / 2);
    let currentElement = array[middle];
    if (array[middle] < val) min = middle + 1;
    else if (array[middle] > val) max = middle - 1;
    else return middle;
  }
  return -1;
}
```
