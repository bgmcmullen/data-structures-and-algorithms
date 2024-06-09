const HashTable = require('./HashTable');

describe('HashTable', () => {
  let hashTable;

  beforeEach(() => {
    hashTable = new HashTable();
  });

  describe('set', () => {
    it('should set a key-value pair in the hash table', () => {
      hashTable.set('name', 'Alice');
      expect(hashTable.map).toEqual({ 5421: 'Alice' }); // Hash of 'n' is 429
    });
  });

  describe('has', () => {
    it('should return true if the key exists in the hash table', () => {
      hashTable.set('name', 'Alice');
      expect(hashTable.has('name')).toBe(true);
    });

    it('should return false if the key does not exist in the hash table', () => {
      expect(hashTable.has('name')).toBe(false);
    });
  });

  describe('keys', () => {
    it('should return an array of keys in the hash table', () => {
      hashTable.set('name', 'Alice');
      hashTable.set('age', 30);
      expect(hashTable.keys()).toEqual([ hashTable.hash('age').toString(), hashTable.hash('name').toString()]);
    });
  });

  describe('hash', () => {
    it('should return the hash value of a key', () => {
      const hashValue = hashTable.hash('name');
      expect(hashValue).toBe(5421);
    });
  });
});
