'use strict';
var even_group_calculate_average = function(collection) {
  var evenIndexArray = [];
  var averageArray = [];
  for (let i = 1; i < collection.length; i += 2) {
    evenIndexArray.push(collection[i]);
  }
  var evenArray = evenIndexArray.filter(x => x % 2 === 0);
  if (evenArray.length === 0) {
    console.log([0]);
  } else {
    let oneDigitAverage = evenArray.filter(x => x < 10 && x >= 0).reduce((x, y) => x + y) / evenArray.filter(x => x < 10 && x >= 0).length;
    let twoDigitAverage = evenArray.filter(x => x < 100 && x >= 10).reduce((x, y) => x + y) / evenArray.filter(x => x < 100 && x >= 10).length;
    let threeDigitAverage = evenArray.filter(x => x < 1000 && x >= 100).reduce((x, y) => x + y) / evenArray.filter(x => x < 1000 && x >= 100).length;
    averageArray.push(oneDigitAverage, twoDigitAverage, threeDigitAverage);
  }
  return averageArray;
};
module.exports = even_group_calculate_average;