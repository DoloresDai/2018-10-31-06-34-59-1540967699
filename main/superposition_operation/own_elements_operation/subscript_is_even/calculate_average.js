'use strict';
var calculate_average = function(collection) {
  var index = 0;
  var evenIndexArray = [];
  // for (index in collection) {
  //   if ((index + 1) % 2 === 0) {
  //     evenIndexArray.push(collection[index]);
  //   }
  // }
  for (let i = 1; i < collection.length; i += 2) {
    evenIndexArray.push(collection[i]);
  }
  return evenIndexArray.reduce((x, y) => x + y) / evenIndexArray.length;
}
module.exports = calculate_average;