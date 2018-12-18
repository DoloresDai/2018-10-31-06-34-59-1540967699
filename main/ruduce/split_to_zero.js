'use strict';

function spilt_to_zero(number, interval) {
  var ruduceArray = [];
  ruduceArray.push(number);
  while (number > 0) {
    number = parseFloat((number - interval).toLocaleString());
    ruduceArray.push(number);
  }
  return ruduceArray;
}
module.exports = spilt_to_zero;