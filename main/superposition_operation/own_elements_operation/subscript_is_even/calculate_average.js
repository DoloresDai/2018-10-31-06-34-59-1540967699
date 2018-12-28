'use strict';
var calculate_average = function(collection) {
  let oddIndexArray = collection.filter((value, index) => index % 2 === 1);
  return evenIndexArray.reduce((x, y) => x + y) / evenIndexArray.length;
}
module.exports = calculate_average;