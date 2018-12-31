'use strict';
var calculate_median = function(collection) {
  let oddIndexArray = collection.filter((value, index) => index % 2 === 1);
  return (oddIndexArray[Math.floor((oddIndexArray.length - 1) / 2)] + oddIndexArray[Math.ceil((oddIndexArray.length - 1) / 2)]) / 2
}
module.exports = calculate_median;