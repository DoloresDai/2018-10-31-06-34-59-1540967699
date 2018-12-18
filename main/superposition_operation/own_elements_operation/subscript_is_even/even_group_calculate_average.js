'use strict';

function getDigitArray(evenArray) {
  for (let i = 0; i < intervalArray.length; i++) {
    if (intervalArray[i] < 10 && intervalArray[i] >= 0) {
      var oneDigitArray.push(intervalArray[i]);
    } else if (intervalArray[i] < 100 && intervalArray[i] >= 10) {
      var twoDigitArray.push(intervalArray[i]);
    } else if (intervalArray[i] < 1000 && intervalArray[i] >= 100) {
      var threeDigitArray.push(intervalArray[i]);
    }
  }

  function countAverage(digitArray) {
    return digitArray.reduce((x, y) => x + y) / digitArray.length;
  }
  var even_group_calculate_average = function(collection) {
    var evenIndexArray = [];
    var averageArray = [];
    for (let i = 1; i < collection.length; i += 2) {
      evenIndexArray.push(collection[i]);
    }
    var evenArray = evenIndexArray.filter(x => x % 2 === 0);
    if (evenArray.length === 0) {
      return [0];
    } else {
      let oneDigitAverage = countAverage(oneDigitAverage);
      let twoDigitAverage = countAverage(twoDigitArray);
      let threeDigitAverage = countAverage(threeDigitArray);
      averageArray.push(oneDigitAverage, twoDigitAverage, threeDigitAverage);
    }
    return averageArray;
  };
  module.exports = even_group_calculate_average;