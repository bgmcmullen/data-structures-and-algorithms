'use strict';

// tests are chatgpt generated
const { BinaryTree, BinarySearchTree, Node } = require('./index.js');

test('inOrder traversal should return correct order', () => {

  let tree = new BinarySearchTree(10);
  let node6 = new Node(6);
  let node3 = new Node(3);
  let node8 = new Node(8);
  let node20 = new Node(20);
  let node17 = new Node(17);
  let node50 = new Node(50);
  let node32 = new Node(32);

  tree.root.left = node6;
  node6.left = node3;
  node6.right = node8;
  tree.root.right = node20;
  node20.left = node17;
  node20.right = node50;
  node50.left = node32;

  expect(tree.inOrder()).toEqual([3, 6, 8, 10, 17, 20, 32, 50]);
});

test('preOrder traversal should return correct order', () => {
  let tree = new BinarySearchTree(10);
  let node6 = new Node(6);
  let node3 = new Node(3);
  let node8 = new Node(8);
  let node20 = new Node(20);
  let node17 = new Node(17);
  let node50 = new Node(50);
  let node32 = new Node(32);

  tree.root.left = node6;
  node6.left = node3;
  node6.right = node8;
  tree.root.right = node20;
  node20.left = node17;
  node20.right = node50;
  node50.left = node32;

  expect(tree.preOrder()).toEqual([10, 6, 3, 8, 20, 17, 50, 32]);
});

test('postOrder traversal should return correct order', () => {
  let tree = new BinarySearchTree(10);
  let node6 = new Node(6);
  let node3 = new Node(3);
  let node8 = new Node(8);
  let node20 = new Node(20);
  let node17 = new Node(17);
  let node50 = new Node(50);
  let node32 = new Node(32);

  tree.root.left = node6;
  node6.left = node3;
  node6.right = node8;
  tree.root.right = node20;
  node20.left = node17;
  node20.right = node50;
  node50.left = node32;

  expect(tree.postOrder()).toEqual([3, 8, 6, 17, 32, 50, 20, 10]);
});

test('add method should insert values correctly', () => {
  let tree = new BinarySearchTree(10);
  let node6 = new Node(6);
  let node3 = new Node(3);
  let node8 = new Node(8);
  let node20 = new Node(20);
  let node17 = new Node(17);
  let node50 = new Node(50);
  let node32 = new Node(32);

  tree.root.left = node6;
  node6.left = node3;
  node6.right = node8;
  tree.root.right = node20;
  node20.left = node17;
  node20.right = node50;
  node50.left = node32;

  tree.add(49);
  tree.add(2);

  expect(tree.inOrder()).toEqual([2, 3, 6, 8, 10, 17, 20, 32, 49, 50]);
});

test('contains method should return correct boolean', () => {
  let tree = new BinarySearchTree(10);
  let node6 = new Node(6);
  let node3 = new Node(3);
  let node8 = new Node(8);
  let node20 = new Node(20);
  let node17 = new Node(17);
  let node50 = new Node(50);
  let node32 = new Node(32);

  tree.root.left = node6;
  node6.left = node3;
  node6.right = node8;
  tree.root.right = node20;
  node20.left = node17;
  node20.right = node50;
  node50.left = node32;

  tree.add(49);
  tree.add(2);

  expect(tree.contains(50)).toBe(true);
  expect(tree.contains(51)).toBe(false);
});

test('get Max should return max value', () => {
  let tree = new BinaryTree(10);
  let node6 = new Node(6);
  let node3 = new Node(3);
  let node8 = new Node(8);
  let node20 = new Node(20);
  let node17 = new Node(17);
  let node50 = new Node(50);
  let node32 = new Node(32);

  tree.root.left = node6;
  node6.left = node3;
  node6.right = node8;
  tree.root.right = node20;
  node20.left = node17;
  node20.right = node50;
  node50.left = node32;

  expect(tree.getMax()).toBe(50);
});

test('get Max should return max value', () => {
  let tree = new BinaryTree(10);
  let node6 = new Node(6);
  let node3 = new Node(3);
  let node8 = new Node(8);
  let node20 = new Node(20);
  let node17 = new Node(17);
  let node2 = new Node(2);
  let node32 = new Node(32);

  tree.root.left = node6;
  node6.left = node3;
  node6.right = node8;
  tree.root.right = node20;
  node20.left = node17;
  node20.right = node2;
  node2.left = node32;

  expect(tree.getMax()).toBe(32);
});

test('breadth-first', () => {
  let tree = new BinaryTree(10);
  let node6 = new Node(6);
  let node3 = new Node(3);
  let node8 = new Node(8);
  let node20 = new Node(20);
  let node17 = new Node(17);
  let node2 = new Node(2);
  let node32 = new Node(32);

  tree.root.left = node6;
  node6.left = node3;
  node6.right = node8;
  tree.root.right = node20;
  node20.left = node17;
  node20.right = node2;
  node2.left = node32;

  expect(tree.breadthFirst()).toEqual([10, 6, 20, 3, 8 ,17, 2, 32]);
});

test('Test Case 1: Binary Tree with Multiple Levels', () => {
  let tree = new BinaryTree(1);
  tree.root.left = new Node(2);
  tree.root.right = new Node(3);
  tree.root.left.left = new Node(4);
  tree.root.left.right = new Node(5);
  tree.root.right.left = new Node(6);
  tree.root.right.right = new Node(7);

  const result = tree.breadthFirst();
  expect(result).toEqual([1, 2, 3, 4, 5, 6, 7]);
});

test('Test Case 2: Binary Tree with a Single Node', () => {
  let tree = new BinaryTree(1);

  const result = tree.breadthFirst();
  expect(result).toEqual([1]);
});
