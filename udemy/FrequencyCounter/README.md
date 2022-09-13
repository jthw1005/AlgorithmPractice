# Frequency counter

## Feature

- Frequency counter는 객체 또는 Set을 사용하여 값의 빈도수 또는 값 자체를 수집하는 패턴이다.
- 이 패턴을 사용하면 종종 중첩 loop를 피할 수 있다.

---

## Example

Write a function called 'same', which accepts two arrays. The function should return true if every value in the array has it’s corresponding value squared in the second array. The frequency of values must be the same.

### Sample Inputs & Outputs

```js
same([1, 2, 3], [4, 1, 9]); // true
same([1, 2, 3], [1, 9]); // false
same([1, 2, 1], [4, 4, 1]); // false
```

### Solution1 - 중첩 loop(O(N^2))

```js
function same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    // indexOf 자체가 loop이다.
    let correctIndex = arr2.indexOf(arr1[i] ** 2);
    if (correctIndex === -1) {
      return false;
    }
    arr2.splice(correctIndex, 1);
  }
  return true;
}
```

### Solution2 - Frequency Counter(O(N))

```js
function same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  let frequencyCounter1 = {};
  let frequencyCounter2 = {};

  // 각 요소의 개수를 value로 갖는 객체를 생성
  for (let val of arr1) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
  }
  for (let val of arr2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
  }

  for (let key in frequencyCounter1) {
    // 첫 번째 객체의 key의 제곱수가 두 번째 객체의 key인지 확인
    if (!(key ** 2 in frequencyCounter2)) {
      return false;
    }
    // 각각의 개수도 맞는지 value를 이용하여 확인
    if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
      return false;
    }
  }
  return true;
}
```

### KeyPoint

두 개의 배열을 객체로 세분화하여 각 배열의 요소들을 분류한 다음, 각 객체를 비교함으로써 코드를 크게 향상시킬 수 있다.

---

## 도전 과제 - validAnagram

Given two strings, write a function to determine if the second string is an anagram of the first. An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cimena, formed from iceman.

### My Solution

```js
function validAnagram(first, second) {
  if (first.length !== second.length) return false;

  const freqCntOfFirst = {};
  const freqCntOfSecond = {};

  for (const val of first) {
    freqCntOfFirst[val] = (freqCntOfFirst[val] || 0) + 1;
  }
  for (const val of second) {
    freqCntOfSecond[val] = (freqCntOfSecond[val] || 0) + 1;
  }

  for (const key in freqCntOfFirst) {
    if (freqCntOfFirst[key] !== freqCntOfSecond[key]) return false;
  }

  return true;
}
```

### Colt Solution

```js
function validAnagram(first, second) {
  if (first.length !== second.length) {
    return false;
  }

  const lookup = {};

  for (let i = 0; i < first.length; i++) {
    let letter = first[i];
    // if letter exists, increment, otherwise set to 1
    lookup[letter] ? (lookup[letter] += 1) : (lookup[letter] = 1);
  }

  for (let i = 0; i < second.length; i++) {
    let letter = second[i];
    // can't find letter or letter is zero then it's not an anagram
    if (!lookup[letter]) {
      return false;
    } else {
      lookup[letter] -= 1;
    }
  }

  return true;
}
```

### KeyPoint

두 대상들의 빈도수를 비교할 때, 각각 객체를 만든 후 비교하는 것도 좋지만, 객체를 하나만 만들고 두 번째 비교군과 비교하며 요소를 빼는 것도 좋다.
