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

function getMax(collection) {
  return collection.reduce((a, b) => {
    return a > b ? a : b;
  });
}

function getEvenArray(collection) {
  return collection.filter((element) => {
    return element % 2 === 0;
  })
}

function getArrByEvenIndex(collection) {
  return collection.filter((element, index) => {
    return index % 2 === 1;
  })
}

function calculateAverage(array) {
  let sum = array.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  });
  return Math.round(sum / array.length);
}
module.exports = even_group_calculate_average;