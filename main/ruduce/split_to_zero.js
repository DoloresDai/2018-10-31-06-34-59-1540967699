'use strict';

function spilt_to_zero(number, interval) {
  var ruduceArray = [];
  while (number > 0) {
    ruduceArray.push(number);
    number = number - interval;
  }
  return ruduceArray;
}
module.exports = spilt_to_zero;