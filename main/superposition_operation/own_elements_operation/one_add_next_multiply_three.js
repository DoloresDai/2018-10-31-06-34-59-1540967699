'use strict';

function one_add_next_multiply_three(collection) {
  var arithmeticArray = [];
  for (let i = 0; i < collection.length - 1; i++) {
    arithmeticArray.push((collection[i] + collection[i + 1]) * 3);
  }
  return arithmeticArray;
}
module.exports = one_add_next_multiply_three;