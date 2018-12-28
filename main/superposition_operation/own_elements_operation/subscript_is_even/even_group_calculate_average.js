'use strict';
var even_group_calculate_average = function(collection) {
  let selected = getArrByEvenIndex(collection);
  let even = getEvenArray(selected);
  if (even.length === 0) {
    return [0];
  }
  let result = [];
  let tempObj = generateDigitObj(even);
  for (let attr in tempObj) {
    if (tempObj[attr].length > 0) {
      result.push(calculateAverage(tempObj[attr]));
    }
  }
  return result;
};

function generateDigitObj(collection) {
  let maxDigit = getMax(collection).toString().length;
  let temp = {};
  for (let i = 1; i <= maxDigit; i++) {
    temp[i.toString()] = [];
  }
  for (let item of collection) {
    temp[item.toString().length].push(item);
  }
  return temp;
}
module.exports = even_group_calculate_average;