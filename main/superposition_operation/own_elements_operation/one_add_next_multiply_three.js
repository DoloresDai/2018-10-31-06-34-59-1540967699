'use strict';

function one_add_next_multiply_three(collection) {
  let arr = collection.map((value, index) => (collection[index] + collection[index + 1]) * 3);
  return arr.filter(x => !(!x || x === ""));
}
module.exports = one_add_next_multiply_three;