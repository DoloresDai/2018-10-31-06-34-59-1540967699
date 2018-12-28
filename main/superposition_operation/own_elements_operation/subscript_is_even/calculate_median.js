'use strict';
var calculate_median = function(collection) {
  let oddIndexArray = collection.filter((value, index) => index % 2 === 1);
  return (evenIndexArray[Math.floor((evenIndexArray.length - 1) / 2)] + evenIndexArray[Math.ceil((evenIndexArray.length - 1) / 2)]) / 2
}
module.exports = calculate_median;