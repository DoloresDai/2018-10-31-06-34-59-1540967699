'use strict';
let getIntegerInterval = require('./get_integer_interval.js');

function get_integer_interval_2(number_a, number_b) {
  return getIntegerInterval(number_a, number_b).filter(x => x % 2 === 0);
}
module.exports = get_integer_interval_2;