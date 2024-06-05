# Array-Reverse
In the first half of this code challenge, you will write functions which sort domain objects. Your functions will receive an array of Movie objects. Each Movie object has a title (string), a year (number), and a list of genres (array of strings). One function will sort the movies by most recent year first. One function will sort the movies, alphabetical by title, but will ignore any leading “A”s, “An”s, or “The”s. Test outputs for these functions, and an array of sample data, have been provided in test and movies.


## Approach & Efficiency
I sorted the movie arrays with the array sort fuction. Tor the title sort I used a helper function to to strip "the" "a" or "an".

## Solution
[Code](movie-sort.js)\
[Test](movie-sort.test.js)
