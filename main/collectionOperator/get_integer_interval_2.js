'use strict';

function get_integer_interval_2(number_a, number_b) {
  var evenArray = [];
  if (number_b - number_a >= 0) {
    evenArray = getArray(number_a, number_b);
  } else {
    evenArray = getArray(number_b, number_a).reverse();
  }
  return getEvenArray(evenArray);
}

function getEvenArray(intervalArray) {
  var evenArray = [];
  for (let i = 0; i < intervalArray.length; i++) {
    if (intervalArray[i] % 2 === 0) {
      evenArray.push(intervalArray[i]);
    }
  }
  return evenArray;
}

function getArray(number_a, number_b) {
  var intervalArray = [];
  for (number_a; number_a <= number_b; number_a++) {
    intervalArray.push(number_a);
  }
  return intervalArray;
}
module.exports = get_integer_interval_2;