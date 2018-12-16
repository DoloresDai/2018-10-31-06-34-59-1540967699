'use strict';

function getCharCode(number_a, number_b) {
  var Array = [number_a, number_b]
  var string = Array.join();
  number_a = string.charCodeAt(0);
  number_b = string.charCodeAt(1);
  return number_a, number_b;
}

function getIntegerArray(number_a, number_b) {
  let varriable = number_b - number_a;
  var intervalArray = new Array；
  while (number_b >= varriable) {
    varriable = number_a++;
    intervalArray.push(varriable);
  }
  return intervalArray;
}

function get_letter_interval(number_a, number_b) {
  let varriable = number_b - number_a;
  var charCodeArray = [];
  for (let i = 0; i < varriable; i++) {
    charCodeArray.push(intervalArray.join.charCodeArray(i));
  }
  return charCodeArray;
}
module.exports = get_letter_interval;