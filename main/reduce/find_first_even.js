'use strict';

function find_first_even(collection) {
  var index = 0;
  var evenArray = [];
  for (index in collection) {
    if (collection[index] % 2 === 0) {
      evenArray.push(collection[index]);
    }
  }
  return evenArray[0];
}
module.exports = find_first_even;