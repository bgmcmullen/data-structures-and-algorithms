const leftJoin = require('./leftJoin.js'); // Adjust the path to where your leftJoin function is located

class HashTable {
  constructor(size = 1000) {
    this.table = new Array(size);
    this.size = size;
  }

  _hash(value) {
    let hash = 0;
    const stringValue = value.toString();
    for (let i = 0; i < stringValue.length; i++) {
      hash = (hash * 31 + stringValue.charCodeAt(i)) % this.size;
    }
    return hash;
  }

  set(key, value) {
    const index = this._hash(key);
    if (!this.table[index]) {
      this.table[index] = [];
      this.table[index].push(key);
    }

    this.table[index].push(value);
  }

  get(key) {
    const index = this._hash(key);
    if (!this.table[index]) {
      return undefined;
    }
    return this.table[index].slice(1);
  }

  keys() {
    const keys = [];
    for (let i = 0; i < this.table.length; i++) {
      if (this.table[i]) {
        keys.push(this.table[i][0]);
      }
    }
    return keys;
  }
}

describe('HashTable', () => {
  test('sets and gets values correctly', () => {
    const hashTable = new HashTable();
    hashTable.set('diligent', 'employed');
    hashTable.set('fond', 'enamored');
    expect(hashTable.get('diligent')).toEqual(['employed']);
    expect(hashTable.get('fond')).toEqual(['enamored']);
    expect(hashTable.get('nonexistent')).toBeUndefined();
  });

  test('retrieves all keys correctly', () => {
    const hashTable = new HashTable();
    hashTable.set('diligent', 'employed');
    hashTable.set('fond', 'enamored');
    expect(hashTable.keys()).toEqual(expect.arrayContaining(['diligent', 'fond']));
  });
});

describe('leftJoin', () => {
  test('correctly performs a left join on two hash tables', () => {
    const synonyms = new HashTable();
    synonyms.set('diligent', 'employed');
    synonyms.set('fond', 'enamored');
    synonyms.set('guide', 'usher');
    synonyms.set('outfit', 'garb');
    synonyms.set('wrath', 'anger');

    const antonyms = new HashTable();
    antonyms.set('diligent', 'idle');
    antonyms.set('fond', 'averse');
    antonyms.set('guide', 'follow');
    antonyms.set('flow', 'jam');
    antonyms.set('wrath', 'delight');

    const result = leftJoin(synonyms, antonyms);

    const expected = {
      diligent: ['employed', 'idle'],
      fond: ['enamored', 'averse'],
      guide: ['usher', 'follow'],
      outfit: ['garb'],
      wrath: ['anger', 'delight']
    };

    for (let key of Object.keys(expected)) {
      const values = result.get(key);
      expect(values).toEqual(expected[key]);
    }
  });
});
