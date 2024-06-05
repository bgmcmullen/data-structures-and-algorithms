'use strict';

function sortMoviesByYear(moviesArray) {
  moviesArray.sort((a, b) => compare(b.year, a.year));
  return moviesArray;
}

function sortMoviesByTitle(moviesArray){
  moviesArray.sort((a, b) => compare(stripPreposition(a.title), stripPreposition(b.title)));
  return moviesArray;
}

function stripPreposition(title){
  const titleArray = title.split(' ');

  if(titleArray[0].toLowerCase() === 'the' || titleArray[0].toLowerCase() === 'an' || titleArray[0].toLowerCase() === 'a') {
    titleArray.shift();
    console.log(titleArray.join(' '));
    return titleArray.join(' ');
  }

  return title;
}

function compare(a, b){
  if(a > b)
    return 1;
  if(a < b)
    return -1;
  return 0;
}



module.exports = {sortMoviesByYear, sortMoviesByTitle};
