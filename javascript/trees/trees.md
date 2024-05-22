## Whiteboard Process
[Whiteboard](Whiteboard-trees.png)


## Approach & Efficiency
The add method inserts a new node with a given value into the binary search tree. It starts from the root node and traverses the tree recursively. If the value to be inserted is less than the current node's value, it moves to the left child node if available, otherwise, it creates a new node as the left child. If the value is greater than the current node's value, it moves to the right child node if available, otherwise, it creates a new node as the right child.

The contains method checks whether a given value exists in the binary search tree by performing an in-order traversal of the tree and checking if the value is included in the resulting list of values.
(chatgpt was used a resource)

## Solution
[Code](index.js)
[Tests](trees.test.js)
