class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(name) {
    if (!this.adjacencyList[name]) {
      this.adjacencyList[name] = [];
    }
  }

  addEdge(v1, v2) {
    this.adjacencyList[v1].push(v2);
    this.adjacencyList[v2].push(v1);
  }

  removeEdge(v1, v2) {
    this.adjacencyList[v1] = this.adjacencyList[v1].filter((v) => v !== v2);
    this.adjacencyList[v2] = this.adjacencyList[v2].filter((v) => v !== v1);
  }

  removeVertex(vertex) {
    this.adjacencyList[vertex].forEach((el) => {
      this.removeEdge(el, vertex);
    });

    delete this.adjacencyList[vertex];
  }

  dfsRecursive(start) {
    const result = [];
    const visitedObj = {};
    // this 따로 지정하기 싫으면 arrow function 써도 됨.
    const adjacencyList = this.adjacencyList;
    (function helperFunc(vertex) {
      if (!vertex) return null;
      visitedObj[vertex] = true;
      result.push(vertex);
      adjacencyList[vertex].forEach((neighbor) => {
        if (!visitedObj[neighbor]) return helperFunc(neighbor);
      });
    })(start);
    return result;
  }

  dfsIterative(start) {
    const result = [];
    const visitedObj = {};
    const stack = [start];
    while (stack.length) {
      const currVertex = stack.pop();
      if (!visitedObj[currVertex]) {
        result.push(currVertex);
        visitedObj[currVertex] = true;
        this.adjacencyList[currVertex].forEach((neighbor) => {
          stack.push(neighbor);
        });
      }
    }
    return result;
  }

  bfsIterative(start) {
    const visitedObj = {};
    const result = [];
    const queue = [start];
    while (queue.length) {
      const currVertex = queue.shift();
      if (!visitedObj[currVertex]) {
        result.push(currVertex);
        visitedObj[currVertex] = true;
        this.adjacencyList[currVertex].forEach((neighbor) => {
          queue.push(neighbor);
        });
      }
    }
    return result;
  }
}

const g = new Graph();

g.addVertex('A');
g.addVertex('B');
g.addVertex('C');
g.addVertex('D');
g.addVertex('E');
g.addVertex('F');

g.addEdge('A', 'B');
g.addEdge('A', 'C');
g.addEdge('B', 'D');
g.addEdge('C', 'E');
g.addEdge('D', 'E');
g.addEdge('D', 'E');
g.addEdge('E', 'F');
console.log(g.adjacencyList);
console.log(g.bfsIterative('A'));
