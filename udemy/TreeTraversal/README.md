# Tree Traversal

## BFS(Breadth-first Search)

- 방문해야 하는 노드의 목록을 Queue에 순서대로 집어 넣으면 FIFO에 따라 BFS가 충족된다.

## DFS(Depth-first Search)

- PreOrder, PostOrder, InOrder 세 가지 방법이 있다.

## BFS vs DFS

- 둘의 시간 복잡도는 동일하다.
  - 어차피 둘 다 노드를 일일이 찾아다니기 때문.
- 트리 구조에 따라 BFS와 DFS의 공간 복잡도가 다르다.
  - 트리가 얕고 넓게 퍼져있다면, BFS는 큐에 여러 개의 노드를 저장해야 하므로 더 많은 공간을 사용한다.
  - 반대로, 트리가 깊고 좁게 퍼져있다면, DFS는 여러 개의 함수 호출 스택을 저장하므로 더 많은 공간을 사용한다.
  - 한편, 대부분의 트리는 전자처럼 생겼으므로 DFS가 통상적으로 더 많이 쓰인다고 볼 수 있다.

## Pre vs Post vs In

- 어떤 상황에서 뭐가 좋은지 딱히 정답은 없다.
