'use strict';

function groupingCountObj(key, val) {
  var groupingCount = {};
  groupingCount[key] = val;
  return groupingCount;
}

function grouping_count(collection) {
  var noRepeatArray = [];
  var counts = [];
  for (var i = 0; i < collection.length;) {
    var count = 0;
    for (let j = i; j < collection.length; j++) {
      if (collection[i] == collection[j]) {
        count++;
      }
    }
    noRepeatArray.push(collection[i]);
    counts.push(count);
    i += count;
  }
  for (let k = 0; k < noRepeatArray.length; k++) {
    groupingCountObj(noRepeatArray[k], counts[k]);
  }
}
module.exports = grouping_count;