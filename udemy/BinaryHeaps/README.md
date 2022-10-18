# Binary Heaps

## Objectives

- Binary Heap에 대해 알아본다.
- Min Heap 및 Max Heap과 비교 대조 해본다.
- 기본적인 메서드들을 구현해본다.
- Heap이 현실 세계에서 어디에 사용되는지, Heap으로부터 어떤 자료구조가 만들어지는지 알아본다.

## Feature

- Heap은 기본적으로 Tree이다.
  - 따라서 Tree에 대해 적용되는 것은 일반적으로 힙에도 적용된다.
- 이진 힙은 이진 탐색 트리와 굉장히 유사하다. 그러나 다른 규칙을 갖는다.
- 공통점
  - 최대 두 개의 자식 노드를 갖는다.
- 차이점
  - 왼쪽, 오른쪽에 따른 크기 규칙이 없다.
  - MaxBinaryHeap에선 부모 노드가 자식 노드보다 항상 크다.
  - MinBinaryHeap에선 부모 노드가 자식 노드보다 항상 작다.
  - 이진 탐색 트리와 같이 한 쪽으로 치우친 구조를 가질 수 없다.
  - 언제나 가능한 가장 적은 공간을 차지한다.
  - 왼쪽 자식노드를 오른쪽 자식 노드보다 먼저 채운다.

## Why Binary Heaps?

- 이진 힙은 Priority Queues(우선순위 큐)를 만들기 위해 자주 사용된다.
  - 우선순위 큐는 굉장히 자주 쓰이는 데이터 구조이다.
- Graph Traversal(그래프 순회) 알고리즘에서도 자주 쓰인다.

## How to build?

### In case of Insert

- 배열의 끝에 추가한다.
- 올바른 자리를 찾을 때까지 bubble up 시켜준다.
- 어떤 자식 노드의 부모 노드 인덱스를 찾는 공식은 다음과 같다.
  - root 노드의 index는 0
  - childIdx = [parentIdx * 2 + 1, parentIdx * 2 + 2]
  - parentIdx = Math.floor((childIdx - 1) / 2)

### In case of Removing max value

- 제일 마지막에 있는 노드와 자리를 바꿔준다.
- 제일 마지막 노드를 제거한다.
- sink down을 적용한다.
- edge case를 잘 고려할 것.

## Big O

- Insertion: O(logN)
- Removal: O(logN)
- Search: O(N)
  탐색에 대한 최적화에 신경 쓴다면 이진 탐색 트리가 더 좋다.

## Recap

- Binary Heaps은 sorting에 있어 굉장히 유용한 자료 구조이다. 또한, 우선순위 큐와 같이 다른 자료 구조를 만들 때도 유용하다.
- Max Binary Heaps와 Min Binary Heaps가 있고, 각각 부모가 자식보다 크거나 작다.
- 수학적 공식을 이용하면, 노드 같은거 없이 배열을 가지고 이진힙을 만들 수 있다.
