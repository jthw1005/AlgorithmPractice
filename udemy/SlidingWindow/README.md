# Sliding window

## Feature

- 이 패턴에서는 Window를 만든다. Window 내부에는 `변수`, `하위 배열` 또는 `문자열` 등이 들어갈 수 있다.
- 조건에 따라서 Window를 왼쪽에서 오른쪽으로 움직인다. 때에 따라 기존 Window를 닫고 새로운 Window를 만들기도 한다.
- 이 패턴은 배열/문자열 등 데이터의 하위 집합을 찾는 경우에 유용하다.

---

## Example

Write a function called maxSubarraySum which accepts an array of integers and a number called **n**. The function should calculate the maximum sum of **n** consecutive elements in the array.

### Solution1 - 중첩 loop(O(N^2))

```js
function maxSubarraySum(arr, num) {
  if (num > arr.length) return null;
  let max = -Infinity;
  for (let i = 0; i < arr.length - num + 1; i++) {
    temp = 0;
    for (let j = 0; j < num; j++) {
      temp += arr[i + j];
    }
    if (temp > max) {
      max = temp;
    }
  }
  return max;
}
```

### Solution2 - Sliding Window(O(N))

```js
function maxSubarraySum(arr, num) {
  let maxSum = 0;
  let tempSum = 0;
  if (arr.length < num) return null;
  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }
  tempSum = maxSum;
  for (let i = num; i < arr.length; i++) {
    // 제일 왼쪽에 있는 숫자 빼고 제일 오른쪽에 있는 숫자 더하기
    tempSum = tempSum - arr[i - num] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
}
```
