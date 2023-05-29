const fp = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [n, ...data] = require('fs')
  .readFileSync(fp)
  .toString()
  .trim()
  .split('\n');

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor(node) {
    this.root = node;
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

const rootNode = new Node('A');

for (let i = 0; i < +n; i++) {
  const [rootVal, leftVal, rightVal] = data[i].split(' ');

  if (leftVal === '.' && rightVal === '.') {
    continue;
  }

  const queue = [rootNode];

  while (queue.length) {
    const currNode = queue.shift();
    if (currNode.val === rootVal) {
      if (leftVal !== '.') {
        currNode.left = new Node(leftVal);
      }
      if (rightVal !== '.') {
        currNode.right = new Node(rightVal);
      }
      break;
    } else {
      if (currNode.left) {
        queue.push(currNode.left);
      }
      if (currNode.right) {
        queue.push(currNode.right);
      }
    }
  }
}

const bst = new BinarySearchTree(rootNode);

console.log(bst.dfsPreOrder().join(''));
console.log(bst.dfsInOrder().join(''));
console.log(bst.dfsPostOrder().join(''));
