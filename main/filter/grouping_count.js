'use strict';

function grouping_count(collection) {
  var count = 0;
  var counts = [];
  var noRepeatArray = [];
  var groupingArray = [];
  var groupingCount = {};
  for (let i = 0; i < collection.length; i++) {
    if (!noRepeatArray.includes(collection[i])) {
      noRepeatArray.push(collection[i]);
    }
  }
  for (let j = 0; j < noRepeatArray.length; j++) {
    for (let k = 0; k < collection.length; k++) {
      if (noRepeatArray[j] === (collection[k])) {
        count++;
      }
    }
    counts.push(count);
    count = 0;
  }
  for (let index in noRepeatArray) {
    groupingCount[noRepeatArray[index]] = counts[index];
  }
  return groupingCount;
}
module.exports = grouping_count;