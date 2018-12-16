'use strict';
var calculate_median = function(collection) {
  var evenIndexArray = [];
  for (let i = 1; i < collection.length; i += 2) {
    evenIndexArray.push(collection[i]);
  }
  return (evenIndexArray[Math.floor((evenIndexArray.length - 1) / 2)] + evenIndexArray[Math.ceil((evenIndexArray.length - 1) / 2)]) / 2
}
module.exports = calculate_median;