'use Strict';

const HashTable = require('./HashTable.js');

function tree_intersection(tree1, tree2){
  let values = [];
  if(!tree1.root || !tree2.root)
    return values;
  const hashTable = new HashTable();

  function addToTable(node){

    hashTable.set(node.value.toString(), node.value);

    if(node.left)
      addToTable(node.left);

    if(node.right)
      addToTable(node.right);
  }

  addToTable(tree1.root);



  function getForIntersection(node){

    if(hashTable.has(node.value.toString()) && hashTable.get(node.value.toString()) === node.value) {
      values.push(node.value);
    }


    if(node.left)
      getForIntersection(node.left);

    if(node.right)
      getForIntersection(node.right);
  }

  getForIntersection(tree2.root);

  return values;
}

module.exports = tree_intersection;
