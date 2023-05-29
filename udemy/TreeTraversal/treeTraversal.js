class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  bfs() {
    const queue = [this.root];
    const data = [];
    while (queue.length) {
      const tempNode = queue.shift();
      data.push(tempNode.val);
      // 이진 트리라서 if 문이 2개지만, 일반적인 트리인 경우에는
      // 자식 노드들에 대해 루프를 돌려야 한다.
      if (tempNode.left) queue.push(tempNode.left);
      if (tempNode.right) queue.push(tempNode.right);
    }
    return data;
  }

  dfs() {
    const stack = [this.root];
    const data = [];
    while (stack.length) {
      const tempNode = stack.pop();
      data.push(tempNode.val);
      if (tempNode.right) stack.push(tempNode.right);
      if (tempNode.left) stack.push(tempNode.left);
    }
    return data;
  }

  dfsPreOrder() {
    const data = [];
    const traverse = (node) => {
      data.push(node.val);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      return;
    };

    traverse(this.root);
    return data;
  }

  dfsPostOrder() {
    const data = [];
    const traverse = (node) => {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      data.push(node.val);
      return;
    };

    traverse(this.root);
    return data;
  }

  dfsInOrder() {
    const data = [];
    const traverse = (node) => {
      if (node.left) traverse(node.left);
      data.push(node.val);
      if (node.right) traverse(node.right);
      return;
    };

    traverse(this.root);
    return data;
  }
}
