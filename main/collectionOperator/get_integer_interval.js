'use strict';

function get_integer_interval(number_a, number_b) {
  let difference = number_b - number_a;
  var newArray = [];
  if (number_b - number_a > 0) {
    return newArray = getArray
  } else if (number_b - number_a === 0) {
    return newArray.push(number_a)
  } else if (number_b - number_a < 0) {
    return newArray = getArray.reverse;
  }
}
return newArray;

function getArray(number_a, number_b) {
  let varriable;
  var intervalArray = new Array；
  while (number_b >= varriable) {
    varriable = number_a++;
    intervalArray.push(varriable);
  }
  return intervalArray;
}
module.exports = get_integer_interval;