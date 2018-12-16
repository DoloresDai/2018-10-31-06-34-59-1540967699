'use strict';

function choose_multiples_of_three(collection) {
  var multipleOfThree = [];
  for (let i = 0; i < collection.length; i++) {
    if (collection[i] % 3 === 0) {
      multipleOfThree.push(collection[i]);
    }
  }
  return multipleOfThree;
}
module.exports = choose_multiples_of_three;