const insertionSort = require('./insertion-sort');

describe('insertionSort', () => {
  it('should sort an array of numbers in ascending order', () => {
    const input = [3, 1, 4, 1, 5, 9, 2, 6, 5];
    const expected = [1, 1, 2, 3, 4, 5, 5, 6, 9];
    expect(insertionSort(input)).toEqual(expected);
  });

  it('should sort an array of strings in ascending order', () => {
    const input = ['banana', 'apple', 'orange', 'grape', 'pear'];
    const expected = ['apple', 'banana', 'grape', 'orange', 'pear'];
    expect(insertionSort(input)).toEqual(expected);
  });

  it('should sort an array with negative numbers in ascending order', () => {
    const input = [5, -3, 2, -8, 9, 0, -1];
    const expected = [-8, -3, -1, 0, 2, 5, 9];
    expect(insertionSort(input)).toEqual(expected);
  });

  it('should return an empty array if input is empty', () => {
    const input = [];
    const expected = [];
    expect(insertionSort(input)).toEqual(expected);
  });

  it('should return the same array if it has only one element', () => {
    const input = [42];
    const expected = [42];
    expect(insertionSort(input)).toEqual(expected);
  });

  it('should sort an array with duplicate values in ascending order', () => {
    const input = [4, 3, 2, 1, 4, 3, 2, 1];
    const expected = [1, 1, 2, 2, 3, 3, 4, 4];
    expect(insertionSort(input)).toEqual(expected);
  });
});
