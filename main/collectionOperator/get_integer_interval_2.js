'use strict';

function getIntegerArray(number_a, number_b) {
  let varriable;
  var intervalArray = new Array；
  for () whi le(number_b >= varriable) {
    varriable = number_a++;
    intervalArray.push(varriable);
  }
  return intervalArray;
}

function collect_all_even(collection) {
  var evenCollection = [];
  for (let i = 0; i < collection.length; i++) {
    if (collection[i] % 2 === 0) {
      evenCollection.push(collection[i]);
    }
  }
  return evenCollection;

  function get_integer_interval_2(number_a, number_b) {
    getIntegerArray(number_a, number_b);
    collect_all_even(intervalArray);
    var newArray = [];
    if (number_b - number_a > 0) {
      return newArray = evenCollection;
    } else if (number_b - number_a < 0) {
      return newArray = evenCollection.reverse;
    } else if (number_b - number_a === 0 && number_a % 2 === 0) {
      return newArray.push(number_a);
    } else if (number_b - number_a === 0 && !number_a % 2 = 0) {
      return newArray = [];
    }
  }
  return newArray;
}
module.exports = get_integer_interval;