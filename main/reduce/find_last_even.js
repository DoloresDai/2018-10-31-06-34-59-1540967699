'use strict';

function find_last_even(collection) {
  var index = 0;
  var evenArray = [];
  for (index in collection) {
    if (collection[index] % 2 === 0) {
      evenArray.push(collection[index]);
    }
  }
  return evenArray[evenArray.length - 1];
}
module.exports = find_last_even;