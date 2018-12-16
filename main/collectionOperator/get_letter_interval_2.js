'use strict';

function getCharCode(number) {
  if (number < 27) {
    return String.fromCharCode(number + 96);
  } else if (number < 53 && number > 26) {
    return 'a' + String.fromCharCode(number + 70);
  } else {
    return 'b' + String.fromCharCode(number + 44);
  }
}

function getCharCodeArray(number_a, number_b) {
  var getLetterInterval = [];
  for (number_a; number_a <= number_b; number_a++) {
    if (number_a < 27) {
      getLetterInterval.push(getCharCode(number_a))
    } else {
      getLetterInterval.push(getCharCode(number_a))
    }
  }
  return getLetterInterval;
}

function get_letter_interval_2(number_a, number_b) {
  if (number_a > number_b) {
    return getCharCodeArray(number_b, number_a).reverse();
  } else {
    return getCharCodeArray(number_a, number_b)
  }
}
module.exports = get_letter_interval_2;