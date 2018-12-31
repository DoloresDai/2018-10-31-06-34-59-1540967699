'use strict';
var calculate_average = function(collection) {
  let oddIndexArray = collection.filter((value, index) => index % 2 === 1);
  return oddIndexArray.reduce((x, y) => x + y) / oddIndexArray.length;
}
module.exports = calculate_average;