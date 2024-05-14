const { Stack, Queue, PseudoQueue, AnimalShelter } = require("../index.js");

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

describe('AnimalShelter', () => {
  let shelter;

  beforeEach(() => {
    shelter = new AnimalShelter();
  });

  it('should enqueue dogs and cats without errors', () => {
    expect(() => {
      shelter.enqueue({ species: 'dog', name: 'Buddy' });
      shelter.enqueue({ species: 'cat', name: 'Whiskers' });
      shelter.enqueue({ species: 'dog', name: 'Max' });
      shelter.enqueue({ species: 'cat', name: 'Mittens' });
    }).to.not.throw();
  });

  it('should dequeue dogs correctly based on preference', () => {
    shelter.enqueue({ species: 'dog', name: 'Buddy' });
    const dog = shelter.dequeue('dog');
    expect(dog).to.deep.equal({ species: 'dog', name: 'Buddy' });
  });

  it('should dequeue cats correctly based on preference', () => {
    shelter.enqueue({ species: 'cat', name: 'Whiskers' });
    const cat = shelter.dequeue('cat');
    expect(cat).to.deep.equal({ species: 'cat', name: 'Whiskers' });
  });

  it('should dequeue remaining dogs and cats correctly', () => {
    shelter.enqueue({ species: 'dog', name: 'Max' });
    shelter.enqueue({ species: 'cat', name: 'Mittens' });
    const dog = shelter.dequeue('dog');
    const cat = shelter.dequeue('cat');
    expect(dog).to.deep.equal({ species: 'dog', name: 'Max' });
    expect(cat).to.deep.equal({ species: 'cat', name: 'Mittens' });
  });

  it('should return null for incorrect preference', () => {
    const bird = shelter.dequeue('bird');
    expect(bird).to.be.null;
  });
});
