
# Merge Sort

[Code](merge-sort.js)\
[tests](merge-sort.test.js)

## blog post

First, the mergeSort function is called with the array [8, 4, 23, 42, 16, 15]. The function checks the length of the array. Since it is more than 1, the array is divided into halves. In this case: [8, 4, 23] and [42, 16, 15].\

The mergeSort function is called again recursively, breaking [8, 4, 23] into [8], [4], [23], and [42, 16, 15] into [42], [16], [15].\

Now the merging process begins:\

Since 8 is smaller than 42, it goes into the merged array first. The merged array is now [8], left array is [4, 23], and the right array is [42, 16, 15].\

Next, since 4 is smaller than 42, it goes into the merged array next. So, the merged array is [4, 8], the left array is [23], and the right array is [42, 16, 15].\

Continuing this process, compare 23 with 42.\

23 is smaller, so it goes into the merged array.\
Resulting Merged Array: [4, 8, 23]\
Left Array: [] (empty)\
Right Array: [42, 16, 15]\
Now, the left array is empty. We'll add the remaining elements from the right array.\

Add 42 to the merged array: [4, 8, 23, 42]\
Left Array: [] (empty)\
Right Array: [16, 15]\
Now, the left array is empty. We'll add the remaining elements from the right array.\

Add 15 to the merged array: [4, 8, 23, 15]\
Left Array: [] (empty)\
Right Array: [16]\
Next, compare 16 with 42.\

16 is smaller, so it goes into the merged array.\
Resulting Merged Array: [4, 8, 23, 15, 16]\
Left Array: [] (empty)\
Right Array: [42]\
Finally, add the remaining element 42 to the merged array.\

Resulting Merged Array: [4, 8, 23, 15, 16, 42]\
Left Array: [] (empty)\
Right Array: [] (empty)\
The final sorted array is [4, 8, 15, 16, 23, 42].\
