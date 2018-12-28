'use strict';

function find_last_even(collection) {
  let arr = collection.filter(x => x % 2 === 0);
  return arr[arr.length - 1];
}
module.exports = find_last_even;