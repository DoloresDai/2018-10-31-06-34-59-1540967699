'use strict';

function rankAsc(collection) {
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

function rank_by_two_large_one_small(collection) {
  var ascArray = rankAsc(collection);
  var spliceTime = Math.ceil(collection.length / 3)
  var spliceArray = [];
  for (let i = 0; i < spliceTime; i += 2) {
    spliceArray.push(ascArray.splice(i, 1));
  }
  for (let j = 0; j < spliceArray.length; j++) {
    ascArray.splice(3 * j + 2, 0, spliceArray[j][0]);
  }
  return ascArray;
}
module.exports = rank_by_two_large_one_small;