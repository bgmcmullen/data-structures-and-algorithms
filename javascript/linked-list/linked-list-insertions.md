# Extend a Linked List to allow various insertion methods.
Write the following methods for the Linked List class:

append
arguments: new value
adds a new node with the given value to the end of the list

insert before
arguments: value, new value
adds a new node with the given new value immediately before the first node that has the value specified

insert after
arguments: value, new value
adds a new

## Whiteboard Process
[Whiteboard](Whiteboard.png)

## Approach & Efficiency
I added a new node to a linked list by iterating through it and adding a new node with the correct value, assigning it the current next value, and assigning the previous node its next value.

## Solution
[Code](index.js)
[Tests](__tests__/linked-list.test.js)
