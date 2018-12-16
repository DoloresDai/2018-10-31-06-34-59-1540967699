'use strict';

function getEvenArray(collection) {
  return collection.filter(x => x % 2 === 0);
}

function getOddArray(collection) {
  return collection.filter(x => x % 2 != 0);
}

function rankDesc(collection) {
  for (let i = 0; i < collection.length - 1; i++) {
    for (let j = 0; j < collection.length - 1 - i; j++) {
      if (collection[j] > collection[j + 1]) {
        let temp = collection[j];
        collection[j] = collection[j + 1];
        collection[j + 1] = temp;
      }
    }
  }
  return collection;
}

function rankAsc(collection) {
  for (let i = 0; i < collection.length - 1; i++) {
    for (let j = 0; j < collection.length - 1 - i; j++) {
      if (collection[j] < collection[j + 1]) {
        let temp = collection[j];
        collection[j] = collection[j + 1];
        collection[j + 1] = temp;
      }
    }
  }
  return collection;
}
var even_asc_odd_desc = function(collection) {
  return rankDesc(getEvenArray(collection)).concat(rankAsc(getOddArray(collection)));
};
module.exports = even_asc_odd_desc;