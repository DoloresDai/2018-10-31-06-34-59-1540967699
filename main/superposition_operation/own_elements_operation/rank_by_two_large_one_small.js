'use strict';

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

function rank_by_two_large_one_small(collection) {
  var descArray = rankDesc(collection);
  var spliceTime = Math.ceil(collection.length / 3)
  var spliceArray = [];
  for (let i = 0; i < spliceTime; i += 2) {
    spliceArray.push(descArray.splice(i, 1));
  }
  for (let j = 0; j < spliceArray.length; j++) {
    descArray.splice(3 * j + 2, 0, spliceArray[j][0]);
  }
  return descArray;
}
module.exports = rank_by_two_large_one_small;