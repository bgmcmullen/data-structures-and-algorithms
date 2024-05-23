'use strict';

const { makeFizzBuzzTree, KaryTree, Node } = require('./kary-tree');


test('fizzBuzzTree', () => {

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

  expect(karyTree.preOrder()).toEqual([15, 2, 5, 6, 7, 3, 8, 9, 4]);
  expect(makeFizzBuzzTree(karyTree).preOrder()).toEqual(['FizzBuzz', '2', 'Buzz', 'Fizz',
    '7', 'Fizz', '8', 'Fizz', '4']);
});
