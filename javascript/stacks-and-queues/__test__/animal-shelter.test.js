const { AnimalShelter } = require("../index.js");

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
    }).not.toThrow();
  });

  it('should dequeue dogs correctly based on preference', () => {
    shelter.enqueue({ species: 'dog', name: 'Buddy' });
    const dog = shelter.dequeue('dog');
    expect(dog).toEqual({ species: 'dog', name: 'Buddy' });
  });

  it('should dequeue cats correctly based on preference', () => {
    shelter.enqueue({ species: 'cat', name: 'Whiskers' });
    const cat = shelter.dequeue('cat');
    expect(cat).toEqual({ species: 'cat', name: 'Whiskers' });
  });

  it('should dequeue remaining dogs and cats correctly', () => {
    shelter.enqueue({ species: 'dog', name: 'Max' });
    shelter.enqueue({ species: 'cat', name: 'Mittens' });
    const dog = shelter.dequeue('dog');
    const cat = shelter.dequeue('cat');
    expect(dog).toEqual({ species: 'dog', name: 'Max' });
    expect(cat).toEqual({ species: 'cat', name: 'Mittens' });
  });

  it('should return null for incorrect preference', () => {
    const bird = shelter.dequeue('bird');
    expect(bird).toBeNull();
  });
});
