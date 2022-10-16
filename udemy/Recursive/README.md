# Recursive

## Objectives

- Recursion이 무엇인지 정의하고 어떻게 사용할지 알아본다.
- Recursive function를 작성할 때 두 가지 핵심 구성요소를 알아본다.
- Recursive function을 더 잘 이해하고 쉽게 디버깅하기 위해 콜 스택을 시각화한다.
- 더 복잡한 문제를 풀기 위해 'Helper method recursion'과 'Pure recursion'에 대해서도 알아본다.

## Feature

- Non-Recursive한 문제 해결 패턴이 Iterative인 것처럼 Recursive도 문제 해결 패턴 중 하나이다.
- JSON.parse / JSON.stringify, Document.getElementById / DOM traversal algorithm, Object traversal 등등 많은 곳에서 이미 쓰이고 있다.
- 재귀 함수는 반드시 갖춰야 하는 두 가지 요소가 있다.
  1. Base case
     Base case에 도달할 때까지 같은 함수를 계속해서 호출하기
  2. Different Input
     함수를 매번 호출할 때마다 다른 인풋 넣어주기
- 위 두 가지 요소가 올바르게 작성되지 않으면 'stack overflow'가 일어날 수도 있다.

## 호출 스택

- 거의 모든 프로그래밍 언어에는 보이지 않는 곳에서 함수 호출을 관리하는 일종의 데이터 구조가 있다.
- 그래서 그걸 담당하는 데이터 구조가 있는데, 자바스크립트의 경우에는 '호출 스택'이다.
- 호출 스택은 자바스크립트의 보이지 않는 곳에서 작동하는 정적 데이터 구조이다.
- 함수를 호출하면 호출 스택의 꼭대기에 쌓인다.
- 함수가 종료되면 호출 스택의 꼭대기에서 제거된다.
- 이전에 실행되던 함수가 종료되면, 컴파일러가 스택의 제일 위에 있는 항목을 제거한다.
- 재귀 함수를 실행하면 호출 스택을 엄청나게 많이 사용하게 된다.

## Helper Method Recursion

### Helper Method Recursion이란?

재귀를 사용하는 설계 패턴.

### 패턴 형태

```js
function outer(input) {
  const outerScopedVariable = [];

  function helper(helperInput) {
    helper(helperInput--);
  }

  helper(input);

  return outerScopedVariable;
}
```

- outerScopedVariable이라는 변수를 전역 변수로 만들지 않기 위해서 외부를 함수로 감쌓다.
- 재귀함수를 실행한 결과를 바깥 함수의 배열 등에 저장하고자 할 때 사용한다.

### 예시

```js
function collectOddValues(arr) {
  let result = [];

  function helper(helperInput) {
    if (helperInput.length === 0) return;
    if (helperInput[0] % 2 !== 0) result.push(helperInput[0]);
    helper(helperInput.slice(1));
  }

  helper(arr);

  return result;
}
```

## Pure Recursion

- Helper Method Recursion과는 다르게 로직에 순수하게 재귀만 들어가는 패턴이다.

```js
function collectOddValues(arr) {
  let newArr = [];

  if (arr.length === 0) return newArr;
  if (arr[0] % 2 !== 0) newArr.push(arr[0]);
  newArr = newArr.concat(collectOddValues(arr.slice(1)));

  return newArr;
}
```

- Pure Recursion으로 로직을 구현할 때, 원본은 건들이지 않고 새로운 복사본을 만들기 위해 다음과 같은 메서드들이 필요하다.
  1. Array - slice, spread operator, concat
  2. String - slice, substring
  3. Object - Object.assign, spread operator

## Tip

재귀함수 작성할 때 점화식을 생각해보면 수월한 경우가 있다.
예를 들어, 피보나치 수열인 경우 아래 점화식을 만족하고

```js
a(n) = a(n - 1) + a(n - 2)
```

power 같은 경우 아래 점화식을 만족한다.

```js
a(n) = b * a(n - 1), a(0) = 1
```
