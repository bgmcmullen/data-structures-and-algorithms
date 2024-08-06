'use strict';

var firstMissingPositive = function(nums) {

  let set = new Set(nums);
  let output = 1;

  while(set.has(output)){
      output++;
  }

  return output;
};
