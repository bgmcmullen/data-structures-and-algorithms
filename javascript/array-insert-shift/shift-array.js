'use strict';

function insertShiftArray(arr, newValue){

  let halfwayPoint = arr.length;
  // Determine if the length of the array is even or odd and add one if it is odd.
  if(arr.length % 2 !== 0) {
    halfwayPoint++;
  }
  halfwayPoint = halfwayPoint/2;
  for(let i = arr.length - 1; i >= halfwayPoint; i--){
    arr[i+1] = arr[i];
  }
  arr[halfwayPoint] = newValue;
  console.log(arr);
}


insertShiftArray([42,8,15,23,42], 16);
