# Trees

## Objectives

- Tree 구조에 대해 정의한다.
- List와 비교 대조 해본다.
- 일반적인 Trees, Binary Trees, Binary Search Trees의 차이점에 대해 알아본다.
- Binary Search Tree을 구현해본다.

## What is a Tree?

- 부모/자식 관계를 가지는 노드들로 이뤄져있다.
- 하나의 노드에서 2개 이상의 노드로 연결될 수 있다.
- 가지가 뻗어나가는 모습과 같아서 Tree 구조라고 불린다.
- List는 Linear한 성질을 가지고 있고, Tree는 Nonlinear한 성질을 갖는다.
- Singly Linked List는 Tree 구조의 특별한 케이스라고도 볼 수 있다.
- 각 노드는 자신 보다 하위 레벨에 있는 노드만 가리킬 수 있다.
- 각 노드는 여러 개의 부모 노드를 가질 수 없다.

  </br>

- **Root**: Tree의 최상위 노드.
- **Child**: 루트에서 멀어지는 방향으로 연결된 노드.
- **Parent**: 자식 노드의 반대 개념.
- **Siblings**: 같은 부모를 가지고 있는 노드의 집합.
- **Leaf**: 자식 노드가 없는 노드.
- **Edge**: 한 노드에서 다른 노드로의 연결선.

## Where to use?

- HTML DOM
- Network Routing
- Abstract Syntax Tree
- Artificial Intelligence
  - alphago
- Folders in Operating System
- JSON!

## Binary Trees VS Binary Search Trees

- 노드마다 최대 두 개의 자식을 가지는 Tree이다.
- 이진 탐색 트리는 이진 트리에서 다음과 같은 특별한 성질이 하나 추가된다.
  - 기준이 되는 어떤 노드가 있을 때, 그 노드의 왼쪽에 있는 노드의 값은 기준 노드의 값보다 작고 오른쪽에 있는 노드의 값은 기준 노드의 값보다 크다.
- 이진 탐색 트리는 무언가를 찾아보는 것을 아주 빠르고 쉽게 만들어준다. 그리고 무언가를 추가하는 것과 노드의 자리를 찾는 것도 쉽게 해준다.

## Big O

- Insertion: O(logN)
- Searching: O(logN)
- 데이터가 한 쪽으로 쏠린 경우와 같이 최악의 상황에서는 O(N)의 시간 복잡도를 같는다.
