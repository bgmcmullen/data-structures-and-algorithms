const repeatedWord = require('./repeated-word');

// Test 1: Test with a sentence containing repeated word
test('Finds repeated word in a sentence', () => {
  const sentence = "the quick brown fox jumps over the lazy dog";
  expect(repeatedWord(sentence)).toBe('the');
});

// Test 2: Test with a sentence containing no repeated word
test('Returns null when there are no repeated words', () => {
  const sentence = "This is a test sentence with no repeated words";
  expect(repeatedWord(sentence)).toBe(null);
});

// Test 3: Test with a sentence containing multiple occurrences of the same word
test('Finds repeated word when multiple occurrences are present', () => {
  const sentence = "The cat in the hat is a cat";
  expect(repeatedWord(sentence)).toBe('cat');
});
