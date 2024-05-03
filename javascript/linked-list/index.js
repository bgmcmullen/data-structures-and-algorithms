'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  contructor() {
    this.head = null;
  }

  insert(value) {
    let newHead = new Node(value);
    newHead.next = this.head;
    this.head = newHead;

  }

  includes(searchValue) {
    let current = this.head;

    while (current) {
      if (current.value === searchValue)
        return true;
      current = current.next;
    }
    return false;
  }
  toString() {
    let current = this.head;
    let listString = "";
    while (current) {
      listString = listString + `{ ${current.value} } -> `;
      current = current.next;
    }
    listString =listString + 'NULL';
    return listString;
  }
}


module.exports = LinkedList;
