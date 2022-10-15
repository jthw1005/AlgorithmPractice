# Multiple pointers

## Feature

- index 또는 위치를 나타내는 포인터를 만들고 특정 조건에 따라 포인터를 앞, 중간 또는 뒤로 움직인다.
- 공간 복잡도 측면에서 매우 효율적이다.

---

## Example

Write a function called ‘sumZero’ which accepts a sorted array of integers. The function should find the first pair where the sum is 0. Return an array that includes both values that sum to zero or undefined if a pair does not exist.

### Solution1 - 중첩 loop(O(N^2))

```js
function sumZero(array) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === 0) {
        return [arr[i], arr[j]];
      }
    }
  }
}

sumZero([-3, -2, -1, 0, 1, 2, 3]); // [-3,3]
sumZero([-2, 0, 1, 3]); // undefined
sumZero([1, 2, 3]); // undefined
```

### Solution2 - Multiple Pointers(O(N))

```js
function sumZero(array) {
  let pointerLeft = 0;
  let pointerRight = array.length - 1;

  while (pointerLeft < pointerRight) {
    let sum = arr[pointerLeft] + arr[pointerRight];

    if (sum < 0) pointerLeft++;
    else if (sum > 0) pointerRight--;
    else return [array[pointerLeft], array[pointerRight]];
  }

  return undefined;
}
```

---

## 도전과제 - countUniqueValues

Implement a function called ‘countUniqueValues’, which accepts a sorted array, and counts the unique values in the array. There can be negative numbers in the array, but it will always be sorted.

### My Solution

```js
function countUniqueValues(arr) {
  if (!arr.length) return 0;
  let left = 0;
  let right = 1;
  let count = 1;
  while (right < arr.length) {
    if (arr[left] === arr[right]) {
      right++;
    } else if (arr[left] !== arr[right]) {
      left = right;
      right++;
      count++;
    }
  }
  return count;
}
```

### Colt Solution

```js
function countUniqueValues(arr) {
  var i = 0;
  for (var j = 0; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }
  return i + 1;
}
```

## KeyPoint

대개 정렬된 데이터일 때 사용할 수 있다.
