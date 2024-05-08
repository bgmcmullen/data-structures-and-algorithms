'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insert(value) {
    let newHead = new Node(value);
    newHead.next = this.head;
    this.head = newHead;

  }

  zipLists(list2){
    let current = this.head;
    let newListCurrent = list2.head;
    let nextListOneNode = null;
    let nextListTwoNode = null;
    while(current !== null && newListCurrent !== null){
      if(current.next === null){
        current.next = nextListTwoNode;
        break;
      }
      nextListOneNode = current.next;
      nextListTwoNode = newListCurrent.next;
      newListCurrent.next = current.next;
      current.next = newListCurrent;
      current = nextListOneNode;
      newListCurrent = nextListTwoNode;

    }
  }

  kthFromEnd(k) {
    let current = this.head;
    let length = 1;
    while(current.next !== null) {
      length++;
      current = current.next;
    }

    if(!(k < length && k >= 0))
      return 'invalid';

    if(length === 1)
      return this.head.value;

    current = this.head;
    let index = length - k;
    for(let i = 0; i < index; i++){
      current = current.next;
    }
    return current.value;
  }

  includes(searchValue) {
    let current = this.head;

    while (current !== null) {
      if (current.value === searchValue)
        return true;
      current = current.next;
    }
    return false;
  }
  toString() {
    let current = this.head;
    let listString = "";
    while (current !== null) {
      listString = listString + `{ ${current.value} } -> `;
      current = current.next;
    }
    listString = listString + 'NULL';
    return listString;
  }

  append(value) {
    let current = this.head;


    while (current.next !== null) {
      current = current.next;
    }
    current.next = new Node(value);
  }

  insertBefore(searchValue, value) {
    let current = this.head;
    if(current.value === searchValue)
      this.insert(value);
    while (current.next !== null) {
      if (current.next.value === searchValue) {
        let newNode = new Node(value);
        newNode.next = current.next;
        current.next = newNode;
        break;
      }
      current = current.next;
    }
  }

  insertAfter(searchValue, value) {
    let current = this.head;
    while (current !== null) {
      if (current.value === searchValue) {
        let newNode = new Node(value);
        newNode.next = current.next;
        current.next = newNode;
        break;
      }
      current = current.next;
    }
  }

}


module.exports = LinkedList;
