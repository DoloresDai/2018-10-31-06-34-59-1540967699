'use strict';

function get_integer_interval(number_a, number_b) {
  if (number_b - number_a >= 0) {
    return getArray(number_a, number_b);
  } else {
    return getArray(number_b, number_a).reverse();
  }
}

function getArray(number_a, number_b) {
  var intervalArray = [];
  for (number_a; number_a <= number_b; number_a++) {
    intervalArray.push(number_a);
  }
  return intervalArray;
}
module.exports = get_integer_interval;