'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.front = null;
    this.rear = null;
  }

  enqueue(value) {
    const newNode = new Node(value);
    if (this.rear === null) {
      this.front = newNode;
      this.rear = newNode;
    } else {
      this.rear.next = newNode;
      this.rear = newNode;
    }

  }

  dequeue() {
    if (this.front === null)
      throw new Error("Queue is emtpy!");
    const oldFront = this.front;
    this.front = this.front.next;
    return oldFront.value;
  }

  peek() {
    if (this.front === null)
      throw new Error("Queue is empty!");

    return this.front.value;
  }

  isempty() {
    return this.front === null;
  }
}

// Binary tree does not have an "Insert" method.
class BinaryTree {
  constructor(value) {
    this.root = new Node(value);
  }

  preOrder() {
    let results = [];

    function _traverse(node) {
      results.push(node.value);
      if (node.left) {
        _traverse(node.left);
      }
      if (node.right) {
        _traverse(node.right);
      }
    }

    _traverse(this.root);
    return results;
  }

  inOrder() {
    let results = [];

    function _traverse(node) {
      if (node.left) {
        _traverse(node.left);
      }

      results.push(node.value);

      if (node.right) {
        _traverse(node.right);
      }
    }

    _traverse(this.root);

    return results;
  }

  postOrder(node = this.root, results = []) {
    if (node.left) {
      this.postOrder(node.left, results);
    }
    if (node.right) {
      this.postOrder(node.right, results);
    }
    results.push(node.value);
    return results;
  }


  getMax(){
    let output = this.root.value;

    function _traverse(node) {
      if(node.value > output)
        output = node.value;
      if(node.left)
        _traverse(node.left);
      if(node.right)
        _traverse(node.right);
    }
    _traverse(this.root);
    return output;
  }

  breadthFirst() {
    let results = [];

    let queue = new Queue();

    queue.enqueue(this.root);

    let current = null;

    while(!queue.isempty()){
      current = queue.peek();
      if(current.left)
        queue.enqueue(current.left);
      if(current.right)
        queue.enqueue(current.right);
      current = queue.dequeue();
      results.push(current.value);
    }
    return results;
  }

}

class BinarySearchTree extends BinaryTree {
  add(value) {
    function _traverse(node) {

      if (value < node.value) {
        if (node.left) {
          _traverse(node.left);
        } else {
          node.left = new Node(value);
        }
      }

      if (value > node.value) {
        if (node.right) {
          _traverse(node.right);
        } else {
          node.right = new Node(value);
        }
      }
    }
    _traverse(this.root);
  }
  contains(value) {
    return this.inOrder().includes(value);
  }
}

module.exports = { BinaryTree, BinarySearchTree, Node };
