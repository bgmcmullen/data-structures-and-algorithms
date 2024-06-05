'use strict';


const {sortMoviesByYear, sortMoviesByTitle} = require('./movie-sort');

describe('sort by year', () => {
  test('1', () => {

    const input = [
      { title: "The Matrix", year: 1999, genres: ["Action", "Sci-Fi"] },
      { title: "Inception", year: 2010, genres: ["Action", "Adventure", "Sci-Fi"] },
      { title: "The Godfather", year: 1972, genres: ["Crime", "Drama"] },
      { title: "Interstellar", year: 2014, genres: ["Adventure", "Drama", "Sci-Fi"] },
    ];

    const expectedOutput = [
      { title: "Interstellar", year: 2014, genres: ["Adventure", "Drama", "Sci-Fi"] },
      { title: "Inception", year: 2010, genres: ["Action", "Adventure", "Sci-Fi"] },
      { title: "The Matrix", year: 1999, genres: ["Action", "Sci-Fi"] },
      { title: "The Godfather", year: 1972, genres: ["Crime", "Drama"] },
    ];

    expect(sortMoviesByYear(input)).toEqual(expectedOutput);
  });

  test('2', () => {

    const input = [
      { title: "Pulp Fiction", year: 1994, genres: ["Crime", "Drama"] },
      { title: "The Dark Knight", year: 2008, genres: ["Action", "Crime", "Drama"] },
      { title: "Fight Club", year: 1999, genres: ["Drama"] },
      { title: "Forrest Gump", year: 1994, genres: ["Drama", "Romance"] },
    ];

    const expectedOutput = [
      { title: "The Dark Knight", year: 2008, genres: ["Action", "Crime", "Drama"] },
      { title: "Fight Club", year: 1999, genres: ["Drama"] },
      { title: "Pulp Fiction", year: 1994, genres: ["Crime", "Drama"] },
      { title: "Forrest Gump", year: 1994, genres: ["Drama", "Romance"] },
    ];


    expect(sortMoviesByYear(input)).toEqual(expectedOutput);
  });
});

describe('sort by title', () => {
  test('1', () => {

    const input = [
      { title: "The Matrix", year: 1999, genres: ["Action", "Sci-Fi"] },
      { title: "A Beautiful Mind", year: 2001, genres: ["Biography", "Drama"] },
      { title: "An Inconvenient Truth", year: 2006, genres: ["Documentary"] },
      { title: "Inception", year: 2010, genres: ["Action", "Adventure", "Sci-Fi"] },
      { title: "The Godfather", year: 1972, genres: ["Crime", "Drama"] },
    ];

    const expectedOutput = [
      { title: "A Beautiful Mind", year: 2001, genres: ["Biography", "Drama"] },
      { title: "The Godfather", year: 1972, genres: ["Crime", "Drama"] },
      { title: "Inception", year: 2010, genres: ["Action", "Adventure", "Sci-Fi"] },
      { title: "An Inconvenient Truth", year: 2006, genres: ["Documentary"] },
      { title: "The Matrix", year: 1999, genres: ["Action", "Sci-Fi"] },
    ];

    expect(sortMoviesByTitle(input)).toEqual(expectedOutput);
  });

  test('2', () => {

    const input = [
      { title: "The Lion King", year: 1994, genres: ["Animation", "Adventure", "Drama"] },
      { title: "A Clockwork Orange", year: 1971, genres: ["Crime", "Sci-Fi"] },
      { title: "Blade Runner", year: 1982, genres: ["Action", "Sci-Fi", "Thriller"] },
      { title: "The Shawshank Redemption", year: 1994, genres: ["Drama"] },
    ];

    const expectedOutput = [
      { title: "Blade Runner", year: 1982, genres: ["Action", "Sci-Fi", "Thriller"] },
      { title: "A Clockwork Orange", year: 1971, genres: ["Crime", "Sci-Fi"] },
      { title: "The Lion King", year: 1994, genres: ["Animation", "Adventure", "Drama"] },
      { title: "The Shawshank Redemption", year: 1994, genres: ["Drama"] },
    ];


    expect(sortMoviesByTitle(input)).toEqual(expectedOutput);
  });
});
