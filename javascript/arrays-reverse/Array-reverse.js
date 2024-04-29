let array = [1,2,3,4,5,6];

function reverseArray(arr) {
  let start = 0;
  let end = arr.length-1;
  while(start <= end) {
    let tempValue = array[start];
    array[start] = array[end];
    array[end] = tempValue;
    start++;
    end--;
  }
}

reverseArray(array);

