## Whiteboard Process
[Whiteboard](Whiteboard-validate-brackets.png)


## Approach & Efficiency
Define a stack

split the string into an array
iterate over the array

Each time an open bracket is encountered push it into the stack

Each time an closed bracket is encountered pop the top from the stack and make it closes the previous bracket if it does not return false.

If we all the way through the array return true

Efficient is O of n.

## Solution
[Code](index.js)
[Tests](__test__/validate-Brackets.test.js)
