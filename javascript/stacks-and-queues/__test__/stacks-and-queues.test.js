const { Stack, Queue, PseudoQueue } = require("../index.js");

it('Can successfully push onto a stack', () => {
  const newStack = new Stack;
  newStack.push(5);
  expect(newStack.peek()).toBe(5);
});

it('Can successfully push multiple values onto a stack', () => {
  const newStack = new Stack;
  newStack.push(5);
  newStack.push(6);
  newStack.push(7);
  newStack.push(8);
  newStack.push(9);
  expect(newStack.peek()).toBe(9);
});

it('Can successfully pop off the stack', () => {
  const newStack = new Stack;
  newStack.push(5);
  newStack.push(6);
  newStack.push(7);
  newStack.push(8);
  newStack.push(9);
  expect(newStack.pop()).toBe(9);
  expect(newStack.peek()).toBe(8);
});

it('Can successfully empty a stack after multiple pops', () => {
  const newStack = new Stack;
  newStack.push(5);
  newStack.push(6);
  newStack.push(7);
  newStack.push(8);
  newStack.push(9);
  expect(newStack.pop()).toBe(9);
  expect(newStack.pop()).toBe(8);
  expect(newStack.pop()).toBe(7);
  expect(newStack.pop()).toBe(6);
  expect(newStack.pop()).toBe(5);
  expect(newStack.isempty()).toBeTruthy();

});


it('Can successfully peek the next item on the stack', () => {
  const newStack = new Stack;
  newStack.push(5);
  newStack.push(6);
  newStack.push(7);
  newStack.push(8);
  newStack.push(10);
  expect(newStack.peek()).toBe(10);
});

it('Can successfully instantiate an empty stack', () => {
  const newStack = new Stack;

  expect(newStack.isempty()).toBeTruthy();
});

it('Calling pop or peek on empty stack raises exception', () => {
  const newStack = new Stack;

  expect(() => newStack.pop()).toThrow();
  expect(() => newStack.peek()).toThrow();
});

it('Can successfully enqueue into a queue', () => {
  const newQueue = new Queue;
  newQueue.enqueue(5);

  expect(newQueue.peek()).toBe(5);
});

it('Can successfully enqueue multiple values into a queue', () => {
  const newQueue = new Queue;
  newQueue.enqueue(5);
  newQueue.enqueue(6);
  newQueue.enqueue(7);
  newQueue.enqueue(8);

  expect(newQueue.peek()).toBe(5);
});

it('Can successfully dequeue out of a queue the expected value', () => {
  const newQueue = new Queue;
  newQueue.enqueue(5);
  newQueue.enqueue(6);
  newQueue.enqueue(7);
  newQueue.enqueue(8);


  expect(newQueue.dequeue()).toBe(5);
  expect(newQueue.peek()).toBe(6);
});

it('Can successfully peek into a queue, seeing the expected valuee', () => {
  const newQueue = new Queue;
  newQueue.enqueue('bob');
  newQueue.enqueue(6);
  newQueue.enqueue(7);
  newQueue.enqueue(8);
  expect(newQueue.peek()).toBe('bob');
});

it('Can successfully empty a queue after multiple dequeues', () => {
  const newQueue = new Queue;
  newQueue.enqueue(5);
  newQueue.enqueue(6);
  newQueue.enqueue(7);
  newQueue.enqueue(8);


  expect(newQueue.dequeue()).toBe(5);
  expect(newQueue.dequeue()).toBe(6);
  expect(newQueue.dequeue()).toBe(7);
  expect(newQueue.dequeue()).toBe(8);
  expect(newQueue.isempty()).toBeTruthy();
});

it('Can successfully instantiate an empty queue', () => {
  const newQueue = new Queue;

  expect(newQueue.isempty()).toBeTruthy();
});

it('Calling dequeue or peek on empty queue raises exception', () => {
  const newQueue = new Queue;

  expect(() => newQueue.dequeue()).toThrow();
  expect(() => newQueue.peek()).toThrow();
});

it('can sucessfull enqueue and dequeue from a pseudo stack', () => {
  const pseudoQueue = new PseudoQueue;

  pseudoQueue.enqueue(20);
  pseudoQueue.enqueue(15);
  pseudoQueue.enqueue(10);
  pseudoQueue.enqueue(5);

  expect(pseudoQueue.dequeue()).toBe(20);
  expect(pseudoQueue.dequeue()).toBe(15);
  expect(pseudoQueue.dequeue()).toBe(10);
  expect(pseudoQueue.dequeue()).toBe(5);


});
