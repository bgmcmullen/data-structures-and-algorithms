'use strict';

const HashTable = require('./HashTable');

function repeatedWord(word) {
  const hashtable = new HashTable();
  const wordArray = word.split(' ');

  for(let i = 0; i < wordArray.length; i++){

    if(hashtable.has(wordArray[i])){
      return wordArray[i];
    }
    hashtable.set(wordArray[i], null);

  }
  return null;
}

module.exports = repeatedWord;
