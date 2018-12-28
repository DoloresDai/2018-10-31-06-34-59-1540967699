'use strict';

function compute_median(collection) {
  var sortArray = collection.sort((x, y) => x - y);
  var floor = Math.floor((sortArray.length - 1) / 2);
  var ceil = Math.ceil((sortArray.length - 1) / 2);
  return (Number(sortArray[floor]) + Number(sortArray[ceil])) / 2;
}
module.exports = compute_median;