'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.children = [];
  }
}

class KaryTree {
  constructor(value) {
    this.root = new Node(value);
  }
  preOrder() {
    let results = [];

    function _traverse(node) {
      results.push(node.value);
      node.children.forEach(child => {
        _traverse(child);
      });

    }

    _traverse(this.root);

    return results;
  }

}

function makeFizzBuzzTree(tree) {

  function copyTree(node) {
    if (node === null) return null;

    let newNode = null;

    if (node.value % 3 === 0 && node.value % 5 === 0) {
      newNode = new Node("FizzBuzz");
    } else if (node.value % 3 === 0) {
      newNode = new Node("Fizz");
    } else if (node.value % 5 === 0) {
      newNode = new Node("Buzz");
    } else {
      newNode = new Node(node.value.toString());
    }

    node.children.forEach(child => {
      const newChild = copyTree(child);
      newNode.children.push(newChild);
    });

    return newNode;
  }
  const newTree = new KaryTree(tree.root.value);
  newTree.root = copyTree(tree.root);
  return newTree;

}


module.exports = { KaryTree, Node, makeFizzBuzzTree };
