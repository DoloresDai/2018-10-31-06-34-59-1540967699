'use strict';

function choose_divisible_integer(collection_a, collection_b) {
  return collection_a.filter(x => {
    for (let element of collection_b) {
      x % element === 0;
    }
  })
}
module.exports = choose_divisible_integer;