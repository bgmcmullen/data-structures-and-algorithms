'use strict';

class HashTable {
  constructor() {
    this.map = {};
  }

  set(key, value) {
    const hashedKey = this.hash(key);
    this.map[hashedKey] = value;
  }

  has(key) {
    return this.hash(key) in this.map;
  }

  get(key) {
    if(this.map[key])
      return this.map[key];
    else
      return null;
  }

  keys() {
    return Object.keys(this.map);
  }

  hash(key) {
    let hashedKey = 0;
    for(let i = 0; i < key.length; i++){
      hashedKey += (key.charCodeAt(i) * 13);
    }
    return hashedKey;
  }
}

module.exports = HashTable;


