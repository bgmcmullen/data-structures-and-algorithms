const mergeSort = require('./merge-sort.js');

describe('mergeSort', () => {
  test('sorts an array of numbers', () => {
    const arr = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
    const sortedArr = [1, 1, 2, 3, 3, 4, 5, 5, 5, 6, 9];
    mergeSort(arr);
    expect(arr).toEqual(sortedArr);
  });

  test('sorts an already sorted array', () => {
    const arr = [1, 2, 3, 4, 5];
    const sortedArr = [1, 2, 3, 4, 5];
    mergeSort(arr);
    expect(arr).toEqual(sortedArr);
  });

  test('sorts an array with negative numbers', () => {
    const arr = [3, -1, 4, -1, 5, -9, 2, 6, -5, 3, -5];
    const sortedArr = [-9, -5, -5, -1, -1, 2, 3, 3, 4, 5, 6];
    mergeSort(arr);
    expect(arr).toEqual(sortedArr);
  });

  test('sorts an empty array', () => {
    const arr = [];
    const sortedArr = [];
    mergeSort(arr);
    expect(arr).toEqual(sortedArr);
  });

  test('sorts an array with one element', () => {
    const arr = [42];
    const sortedArr = [42];
    mergeSort(arr);
    expect(arr).toEqual(sortedArr);
  });
});
