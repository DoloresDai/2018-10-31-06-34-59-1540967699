'use strict';

function groupingCountObj(key, val) {
  var groupingCount = {
    'key': key,
    'count': val
  };
  return groupingCount;
}

function count_same_elements(collection) {
  var count = 0;
  var counts = [];
  var noRepeatArray = [];
  var groupingArray = [];
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
    groupingArray.push(groupingCountObj(noRepeatArray[index], counts[index]));
  }
  return groupingArray;
}
module.exports = count_same_elements;