# Graphs

## Introduction

- 그래프는 보통 사용자 추천 엔진 등을 만들 때 사용된다.
- 넷플릭스에서 새로운 영화를 추천하거나, 광고주가 무언가를 기반으로 대상을 정할 때, 그래프는 아주 유용하다.

## Objectives

- Graph가 뭔지 정의한다.
- 여러 가지 Graph의 종류(이전에 다룬 Tree도 일종의 Graph이다.)를 비교 및 대조하고 실제 세계에서의 사용 예시를 살펴본다.
- 여러 가지 방법이 있지만 그 중 인접 리스트(adjacency list)라는 것을 활용해서 그래프를 코딩해 본다.
- BFS와 DFS를 사용해서 그래프를 순회해본다.
- 그래프 순회 알고리즘을 비교 및 대조해본다.

## What is Graphs?

- Nodes + Connections
- 그래프는 각자 선으로 이어진 여러 개의 노드들로 구성되어 있다.
- Tree는 하나의 노드에서 다른 노드까지의 경로가 하나 밖에 없다.

## Uses for Graphs

- Social Networks
- Location / Mapping
- Routing Algorithms
- Visual Hierarchy
- File System Oprimizations
- EVERYWHERE!

## Terms

- Vertex: a node
- Edge: connection between nodes
- Weighted/Unweighted: edge에 값이 부여됐는지 아닌지의 여부
  - ex) 지도 상에서 점들 사이의 거리
- Directed/Undirected: 일방통행 / 양방통행
  - ex) facebook친구 / 인스타그램팔로우

## 그래프를 표현하는 두 가지 방법

1. 인접 리스트

- edge가 많지 않고 vertex가 많은 그래프에 대해서는 인접 행렬보다 더 적은 공간을 차지한다.
  (※ 실제 연결되어 있는 vertex들만 나타내기 때문)
- 존재하는 edge들만 표현하기 때문에 모든 edge를 빠르게 순회할 수 있다.
- 특정 edge가 존재하는 것을 확인하려면 느리다.

2. 인접 행렬

- vertex가 많은 graph일 때, 인접 리스트보다 더 많은 공간을 더 차지한다.
  (※ 행렬의 특징 상 서로 연결되어 있지 않은 두 vertex간의 관계도 표현할 수 밖에 없다.)
- 모든 edge를 순회하려면 모든 vertex간의 관계에 대해 루프를 돌아야 하므로 느리다.
- 특정 edge가 존재하는 것을 확인하는 것은 빠르다.

여기서는 인접 리스트로 그래프를 구현해본다.
실제 세상에는 퍼진 형태의 그래프가 더 많고 vertex의 개수가 많아도 그게 다 서로 연결되어 있지 않은 경우가 많다. 또한, 인접 행렬은 차지하는 공간이 많기 때문.

### 두 방법의 Big O

|   operation   |  adjacency list  | adjacency matrix |
| :-----------: | :--------------: | :--------------: |
|  add vertex   |       O(1)       |   O(abs(V^2))    |
|   add edge    |       O(1)       |       O(1)       |
| remove vertex | O(abs(V)+abs(E)) |   O(abs(V^2))    |
|  remove edge  |       O(E)       |       O(1)       |
|     query     | O(abs(V)+abs(E)) |       O(1)       |
|    storage    | O(abs(V)+abs(E)) |   O(abs(V^2))    |

(※ abs(V): number of vertices, abs(E): number of edges)
