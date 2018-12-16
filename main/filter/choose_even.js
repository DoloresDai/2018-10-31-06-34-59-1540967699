'use strict';

function choose_even(collection) {
  var evenCollection = new Array;
  for (let i = 0; i < collection.length; i++) {
    if (collection[i] % 2 === 0) {
      evenCollection.push(collection[i]);
    }
  }
  return evenCollection;
}
module.exports = choose_even;