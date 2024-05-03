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


});
