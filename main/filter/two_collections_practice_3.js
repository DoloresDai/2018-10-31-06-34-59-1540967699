'use strict';

function choose_divisible_integer(collection_a, collection_b) {
  return collection_a.filter(x => {
    for (let element of collection_b) {
      if (x % element === 0) {
        return true;
      }
    }
    return false;
  });
}
module.exports = choose_divisible_integer;