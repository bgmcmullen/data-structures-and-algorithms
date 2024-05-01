function binarySearch(arr, key) {
  let startPoint = 0;
  let endPoint = arr.length - 1;
  let middlePoint = 0;
  if (key < arr[startPoint] || key > arr[endPoint]) {
    return -1;
  }

  while (endPoint - startPoint > 1) {
    if ((endPoint - startPoint) % 2 === 1) {
      middlePoint = ((endPoint - startPoint) + 1) / 2 + startPoint;
    } else {
      middlePoint = (endPoint - startPoint) / 2 + startPoint;
    }
    if (arr[middlePoint] === key)
      return middlePoint;
    if (arr[endPoint] === key)
      return middlePoint;
    if (arr[startPoint] === key)
      return middlePoint;
    if (key > arr[middlePoint])
      startPoint = middlePoint;
    if (key < arr[middlePoint])
      endPoint = middlePoint;
  }
  return -1;
}


console.log(binarySearch([-131, -82, 0, 27, 42, 68, 179], 42));
