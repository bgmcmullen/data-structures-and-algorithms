'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
    this.next = null;
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

module.exports = { BinarySearchTree, Node };
