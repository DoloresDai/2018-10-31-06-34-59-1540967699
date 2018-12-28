'use strict';

function grouping_count(collection) {
  let cout = {};
  for (let value of collection) {
    !cout.hasOwnProperty(value) ? cout[value] = 1 : cout[value]++;
  }
  return cout;
}
module.exports = grouping_count;