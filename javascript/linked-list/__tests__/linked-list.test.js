'use strict';

// Require our linked list implementation
const LinkedList = require('../index');

describe('Linked List', () => {
  it('works', () => {
    expect(true).toBeTruthy();
  });

  it('Can successfully instantiate an empty linked list', () => {
    let newList = new LinkedList();
    expect(newList).toBeDefined();
  });

  it('Can properly insert into the linked list', () => {
    let newList = new LinkedList();
    newList.insert(27);
    expect(newList.includes(27)).toBeTruthy();
  });

  it('The head property will properly point to the first node in the linked list.', () => {
    let newList = new LinkedList();
    newList.insert(27);
    newList.insert('blobs');
    newList.insert('monster');
    newList.insert('evil cat');
    newList.insert('green dog');
    expect(newList.head.value).toBe('green dog');
  });

  it('Can properly insert multiple nodes into the linked list', () => {
    let newList = new LinkedList();
    newList.insert(27);
    newList.insert('blobs');
    expect(newList.head.value).toBe('blobs');
    expect(newList.head.next.value).toBe(27);
    newList.insert('monster');
    expect(newList.head.value).toBe('monster');
    expect(newList.head.next.value).toBe('blobs');
    newList.insert('evil cat');
    expect(newList.head.value).toBe('evil cat');
    expect(newList.head.next.value).toBe('monster');
    newList.insert('green dog');
    expect(newList.head.value).toBe('green dog');
    expect(newList.head.next.value).toBe('evil cat');
  });


  it('Will return true when finding a value within the linked list that exists', () => {
    let newList = new LinkedList();
    newList.insert(27);
    newList.insert('blobs');
    newList.insert('monster');
    newList.insert('evil cat');
    newList.insert('green dog');
    expect(newList.includes(27)).toBeTruthy();
    expect(newList.includes('blobs')).toBeTruthy();
    expect(newList.includes('monster')).toBeTruthy();
    expect(newList.includes('green dog')).toBeTruthy();
    expect(newList.includes('evil cat')).toBeTruthy();
  });

  it('Will return false when searching for a value in the linked list that does not exist', () => {
    let newList = new LinkedList();
    newList.insert(27);
    newList.insert('blobs');
    newList.insert('monster');
    newList.insert('evil cat');
    newList.insert('green dog');
    expect(newList.includes(23)).toBeFalsy();

  });

  it('Can properly return a collection of all the values that exist in the linked list', () => {
    let newList = new LinkedList();
    newList.insert(27);
    newList.insert('blobs');
    newList.insert('monster');
    newList.insert('evil cat');
    newList.insert('green dog');
    expect(newList.toString()).toBe('{ green dog } -> { evil cat } -> { monster } -> { blobs } -> { 27 } -> NULL');

  });

  it('Can successfully add a node to the end of the linked list', () => {
    let newList = new LinkedList();

    newList.insert(2);
    newList.insert(3);
    newList.insert(1);
    newList.append(5);

    expect(newList.toString()).toBe('{ 1 } -> { 3 } -> { 2 } -> { 5 } -> NULL');

  });

  it('Can successfully add multiple nodes to the end of a linked list', () => {
    let newList = new LinkedList();
    newList.insert(2);
    newList.insert(3);
    newList.insert(1);
    newList.append(5);
    newList.append(9);

    expect(newList.toString()).toBe('{ 1 } -> { 3 } -> { 2 } -> { 5 } -> { 9 } -> NULL');


  });

  it('Can successfully insert a node before a node located in the middle of a linked list', () => {
    let newList = new LinkedList();
    newList.insert(2);
    newList.insert(3);
    newList.insert(1);
    newList.insertBefore(3, 5);
    expect(newList.toString()).toBe('{ 1 } -> { 5 } -> { 3 } -> { 2 } -> NULL');


  });

  it('Can successfully insert a node before the first node of a linked list', () => {
    let newList = new LinkedList();
    newList.insert(2);
    newList.insert(3);
    newList.insert(1);
    newList.insertBefore(1, 5);
    expect(newList.toString()).toBe('{ 5 } -> { 1 } -> { 3 } -> { 2 } -> NULL');


  });

  it('Can successfully insert after a node in the middle of the linked list', () => {
    let newList = new LinkedList();
    newList.insert(2);
    newList.insert(3);
    newList.insert(1);
    newList.insertAfter(3, 5);
    expect(newList.toString()).toBe('{ 1 } -> { 3 } -> { 5 } -> { 2 } -> NULL');

  });

  it('Can successfully insert a node after the last node of the linked list', () => {
    let newList = new LinkedList();
    newList.insert(2);
    newList.insert(3);
    newList.insert(1);
    newList.insertAfter(2, 5);
    expect(newList.toString()).toBe('{ 1 } -> { 3 } -> { 2 } -> { 5 } -> NULL');

  });

  it('Where k is greater than the length of the linked list', () => {
    let newList = new LinkedList();
    newList.insert(2);
    newList.insert(8);
    newList.insert(3);
    newList.insert(1);
    expect(newList.kthFromEnd(20)).toBe('invalid');

  });

  it('Where k and the length of the list are the same', () => {
    let newList = new LinkedList();
    newList.insert(2);
    newList.insert(8);
    newList.insert(3);
    newList.insert(1);
    expect(newList.kthFromEnd(4)).toBe('invalid');

  });

  it('Where k is not a positive integert', () => {
    let newList = new LinkedList();
    newList.insert(2);
    newList.insert(8);
    newList.insert(3);
    newList.insert(1);
    expect(newList.kthFromEnd(-4)).toBe('invalid');

  });

  it('Where the linked list is of a size 1', () => {
    let newList = new LinkedList();
    newList.insert(2);

    expect(newList.kthFromEnd(0)).toBe(2);

  });


  it('“Happy Path” where k is not at the end, but somewhere in the middle of the linked list', () => {
    let newList = new LinkedList();
    newList.insert(2);
    newList.insert(8);
    newList.insert(3);
    newList.insert(1);
    expect(newList.kthFromEnd(2)).toBe(8);

  });


});
