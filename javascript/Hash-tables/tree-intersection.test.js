'use strict';

const tree_intersection = require('./tree-intersection.js');

class TreeNode {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

module.exports = TreeNode;


describe('tree_intersection', () => {

  it('should return common values between two trees', () => {
    const tree1 = {
      root: new TreeNode(10,
        new TreeNode(5),
        new TreeNode(15,
          new TreeNode(12),
          new TreeNode(20)
        )
      )
    };

    const tree2 = {
      root: new TreeNode(15,
        new TreeNode(10),
        new TreeNode(25,
          new TreeNode(12),
          new TreeNode(30)
        )
      )
    };

    const commonValues = tree_intersection(tree1, tree2);

    expect(commonValues).toEqual(expect.arrayContaining([10, 15, 12]));
    expect(commonValues.length).toEqual(3);
  });

  it('should return an empty array if no common values exist', () => {
    const tree1 = {
      root: new TreeNode(1,
        new TreeNode(2),
        new TreeNode(3)
      )
    };

    const tree2 = {
      root: new TreeNode(4,
        new TreeNode(5),
        new TreeNode(6)
      )
    };

    const commonValues = tree_intersection(tree1, tree2);

    expect(commonValues).toEqual([]);
  });

  it('should handle trees with only one node', () => {
    const tree1 = { root: new TreeNode(1) };
    const tree2 = { root: new TreeNode(1) };

    const commonValues = tree_intersection(tree1, tree2);

    expect(commonValues).toEqual([1]);
  });

  it('should handle trees where one tree is empty', () => {
    const tree1 = {
      root: new TreeNode(1,
        new TreeNode(2),
        new TreeNode(3)
      )
    };

    const tree2 = { root: null };

    const commonValues = tree_intersection(tree1, tree2);

    expect(commonValues).toEqual([]);
  });

  it('should handle trees where both trees are empty', () => {
    const tree1 = { root: null };
    const tree2 = { root: null };

    const commonValues = tree_intersection(tree1, tree2);

    expect(commonValues).toEqual([]);
  });

});
