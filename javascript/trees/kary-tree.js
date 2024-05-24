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

// Create a sample k-ary tree
const child1 = new Node(2);
const child2 = new Node(3);
const child3 = new Node(4);

const grandchild1 = new Node(5);
const grandchild2 = new Node(6);
const grandchild3 = new Node(7);
child1.children.push(grandchild1, grandchild2, grandchild3);

const grandchild4 = new Node(8);
const grandchild5 = new Node(9);
child2.children.push(grandchild4, grandchild5);

// Create a k-ary tree instance
const karyTree = new KaryTree(15);
karyTree.root.children.push(child1, child2, child3);

console.log(karyTree.preOrder());
console.log(makeFizzBuzzTree(karyTree).preOrder());

module.exports = { KaryTree, Node, makeFizzBuzzTree };
