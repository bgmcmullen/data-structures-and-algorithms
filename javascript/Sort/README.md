
# Insertion Sort

[Code](insertion-sort.js)\
[tests](insertion-sort.test.js)

## Blog Post
### Pass: 1
On the first pass the first
Unsorted: [8,4,23,42,16,15]
In the first pass, the algorithm simply adds 9 to the array since there are no other elements to compare with. The sorted array is now [8].

### Pass: 2
Unsorted: [8,4,23,42,16,15]
In the second pass the algorithm now compare the next value “4” from the unsorted array with 8 in the sorted array. Since 4 is less than 8 it is inserted before 8 and the sorted array is now [4, 8].

### Pass: 3
In the third pass the algorithm set through the array to find a value greater than 23. Since is 23 is greater than all numbers in the array it is inserted at the end.
The sorted array is now [4, 8,  23].

### Pass: 4
In the fourth pass 42 is inserted at the end of the array for the same reason and the sorted array is now  [4, 8,  23, 42].

### Pass: 5
On the first pass the algorithm will now find that 23 is greater than 16 so it will insert 16 before 23. The sorted array is now [4, 8,  16, 23, 42].

### Pass: 6
On the first pass the algorithm will now find that 23 is greater than 16 so it will insert 16 before 23.
On the first pass the algorithm will now find that 16 is greater than 15 so it will insert 16 before 16. The sorted array is now [4, 8,  15, 16, 23, 42]
