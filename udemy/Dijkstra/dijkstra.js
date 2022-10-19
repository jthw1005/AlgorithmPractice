class WeightedGraph {
    constructor() {
        this.adjacencyList = {};
    }

    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = [];
        }
    }

    addEdge(vertex1, vertex2, weight) {
        this.adjacencyList[vertex1].push({ vertex: vertex2, weight });
        this.adjacencyList[vertex2].push({ vertex: vertex1, weight });
    }

    Dijkstra(start, finish) {
        const nodes = new PriorityQueue();
        const distances = {};
        const previous = {};
        let path = []; //to return at end
        let smallest;
        //build up initial state
        for (let vertex in this.adjacencyList) {
            if (vertex === start) {
                distances[vertex] = 0;
                nodes.enqueue(vertex, 0);
            } else {
                distances[vertex] = Infinity;
                nodes.enqueue(vertex, Infinity);
            }
            previous[vertex] = null;
        }
        // as long as there is something to visit
        while (nodes.values.length) {
            smallest = nodes.dequeue().val;
            if (smallest === finish) {
                //WE ARE DONE
                //BUILD UP PATH TO RETURN AT END
                while (previous[smallest]) {
                    path.push(smallest);
                    smallest = previous[smallest];
                }
                break;
            }
            if (smallest || distances[smallest] !== Infinity) {
                for (let neighbor in this.adjacencyList[smallest]) {
                    //find neighboring node
                    let nextNode = this.adjacencyList[smallest][neighbor];
                    //calculate new distance to neighboring node
                    let candidate = distances[smallest] + nextNode.weight;
                    let nextNeighbor = nextNode.node;
                    if (candidate < distances[nextNeighbor]) {
                        //updating new smallest distance to neighbor
                        distances[nextNeighbor] = candidate;
                        //updating previous - How we got to neighbor
                        previous[nextNeighbor] = smallest;
                        //enqueue in priority queue with new priority
                        nodes.enqueue(nextNeighbor, candidate);
                    }
                }
            }
        }
        return path.concat(smallest).reverse();
    }

    myDijkstra(start, finish) {
        const minPQ = new PriorityQueue();
        const distances = {};
        const previous = {};
        const path = [];

        // 초기 셋팅
        for (let vertex in this.adjacencyList) {
            if (vertex === start) {
                distances[vertex] = 0;
                minPQ.enqueue(vertex, 0);
            } else {
                distances[vertex] = Infinity;
                minPQ.enqueue(vertex, Infinity);
            }
            previous[vertex] = null;
        }

        while (minPQ.values.length) {
            let minVertex = minPQ.dequeue().val;
            if (minVertex === finish) {
                while (minVertex) {
                    path.push(minVertex);
                    minVertex = previous[minVertex];
                }
                break;
            } else {
                for (let neighbor of this.adjacencyList[minVertex]) {
                    const distCandidate = distances[minVertex] + neighbor.weight;
                    const vertex = neighbor.vertex;
                    if (distances[vertex] > distCandidate) {
                        distances[vertex] = distCandidate;
                        previous[vertex] = minVertex;
                        minPQ.enqueue(vertex, distCandidate);
                    }
                }
            }
        }

        return path.reverse();
    }
}

// naive version of priority queue
class PriorityQueue {
    constructor() {
        this.values = [];
    }

    enqueue(val, priority) {
        this.values.push({ val, priority });
        this.sort();
    }

    dequeue() {
        return this.values.shift();
    }

    sort() {
        this.values.sort((a, b) => a.priority - b.priority);
    }
}

// binary heap version of priority queue
/*
class Node {
  constructor(val, priority) {
    this.val = val;
    this.pritority = priority;
  }
}

class PriorityQueue {
  constructor() {
    this.values = [];
  }

  enqueue(val, priority) {
    const newNode = new Node(val, priority);
    this.values.push(newNode);
    this.bubbleUp();
  }

  bubbleUp() {
    let childIdx = this.values.length - 1;
    while (childIdx > 0) {
      const parentIdx = Math.floor((childIdx - 1) / 2);
      if (this.values[childIdx].priority >= this.values[parentIdx].priority) break;
      swap(this.values, childIdx, parentIdx);
      childIdx = parentIdx;
    }
  }

  dequeue() {
    if (this.values.length <= 0) return null;
    swap(this.values, 0, this.values.length - 1);
    const min = this.values.pop();
    this.sinkDown();
    return min;
  }

  sinkDown() {
    let parentIdx = 0;
    const lastIdx = this.values.length - 1;

    while (parentIdx < lastIdx) {
      const childIdxs = [2 * parentIdx + 1, 2 * parentIdx + 2];
      let targetIdx;
      if (childIdxs[0] > lastIdx) break;
      else if (childIdxs[0] === lastIdx) targetIdx = childIdxs[0];
      else
        targetIdx =
          this.values[childIdxs[0]].priority < this.values[childIdxs[1].priority]
            ? childIdxs[0]
            : childIdxs[1];

      if (this.values[parentIdx].priority <= this.values[targetIdx].priority) break;
      swap(this.values, parentIdx, targetIdx);
      parentIdx = targetIdx;
    }
  }
}

const swap = (arr, idx1, idx2) => {
  [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
};
*/

const graph = new WeightedGraph();

graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');
graph.addVertex('E');
graph.addVertex('F');

graph.addEdge('A', 'B', 4);
graph.addEdge('A', 'C', 2);
graph.addEdge('B', 'E', 3);
graph.addEdge('C', 'D', 2);
graph.addEdge('C', 'F', 4);
graph.addEdge('D', 'E', 3);
graph.addEdge('D', 'F', 1);
graph.addEdge('E', 'F', 1);

console.log(graph.adjacencyList);

console.log(graph.myDijkstra('A', 'E'));
