
// hashtable from chatgpt


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
      this.table[index] = [key];
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


function leftJoin(tableOne, tableTwo) {
  const newTable = new HashTable();

  const tableOneKeys = tableOne.keys();

  for (let i = 0; i < tableOneKeys.length; i++) {
    newTable.set(tableOneKeys[i], tableOne.get(tableOneKeys[i])[0]);
  }

  const tableTwoKeys = tableTwo.keys();
  for (let i = 0; i < tableTwoKeys.length; i++) {
    newTable.set(tableTwoKeys[i], tableTwo.get(tableTwoKeys[i])[0]);
  }
  return newTable;
}

module.exports = leftJoin;
