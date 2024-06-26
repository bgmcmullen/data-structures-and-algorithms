'use strict';

//test 1
//test 3

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor(top = null) {
    this.top = top;
  }

  push(value) {
    const newNode = new Node(value);
    newNode.next = this.top;
    this.top = newNode;
  }

  pop() {
    if (this.top === null)
      throw new Error("Stack is emtpy!");
    const oldTop = this.top;
    this.top = this.top.next;
    return oldTop.value;
  }

  peek() {
    if (this.top === null)
      throw new Error("Stack is emtpy!");

    return this.top.value;
  }

  isempty() {
    return this.top === null;
  }

  getMax() {
    let output = this.top.value;
    let current = this.top;
    while(current){
      if(current.value > output)
        output = current.value;
      current = current.next;
    }
    return output;
  }
}

class Queue {
  constructor() {
    this.front = null;
    this.rear = null;
  }

  enqueue(value) {
    const newNode = new Node(value);
    if (this.rear === null) {
      this.front = newNode;
      this.rear = newNode;
    } else {
      this.rear.next = newNode;
      this.rear = newNode;
    }

  }

  dequeue() {
    if (this.front === null)
      throw new Error("Queue is emtpy!");
    const oldFront = this.front;
    this.front = this.front.next;
    return oldFront.value;
  }

  peek() {
    if (this.front === null)
      throw new Error("Queue is empty!");

    return this.front.value;
  }

  isempty() {
    return this.front === null;
  }
}

class PseudoQueue {
  constructor() {
    this.mainStack = new Stack();
    this.reverseStack = new Stack();
  }
  enqueue(value) {

    this.mainStack.push(value);
  }
  dequeue() {
    let output = null;
    while (this.mainStack.top) {
      this.reverseStack.push(this.mainStack.pop());
    }
    output = this.reverseStack.pop();
    while (this.reverseStack.top) {
      this.mainStack.push(this.reverseStack.pop());
    }
    return output;
  }
}

class AnimalShelter {
  constructor() {
    this.catQueue = new Queue;
    this.dogQueue = new Queue;
  }
  enqueue(animal) {
    if (!(animal.species === 'dog' || animal.species === 'cat'))
      return 'invalid animal';
    if (animal.species === 'dog')
      this.dogQueue.enqueue(animal);
    if (animal.species === 'cat')
      this.catQueue.enqueue(animal);
  }
  dequeue(pref) {
    if (!(pref === 'dog' || pref === 'cat'))
      return null;
    if (pref === 'dog')
      return this.dogQueue.dequeue();
    if (pref === 'cat')
      return this.catQueue.dequeue();
  }
}


function validateBrackets(string) {
  const array = string.split('');
  let stack = new Stack();
  let previousBracket = null;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === '{' || array[i] === '[' || array[i] === '(') {
      stack.push(array[i]);
    }
    if (array[i] === '}' || array[i] === ']' || array[i] === ')') {
      previousBracket = stack.pop();
      if (!((previousBracket === '{' && array[i] === '}') ||
        (previousBracket === '[' && array[i] === ']') ||
        (previousBracket === '(' && array[i] === ')'))) {
        return false;
      }
    }
  }
  return true;
}

module.exports = { Stack, Queue, PseudoQueue, AnimalShelter, validateBrackets };
