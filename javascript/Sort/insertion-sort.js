'use strict';

function insert(sorted, value) {
  let i = 0;
  let temp = null;
  while(value > sorted[i]){
    i++;
  }
  while(i < sorted.length){
    temp = sorted[i];
    sorted[i] = value;
    value = temp;
    i++;
  }
  sorted.push(value);
}

function insertionSort(input) {
  let sorted = [];
  for (let i = 0; i < input.length; i++){
    insert(sorted, input[i]);
  }
  return sorted;
}

module.exports = insertionSort;
