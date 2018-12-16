'use strict';

function average_uneven(collection) {
  return collection.filter(x => x % 2 != 0).reduce((x, y) => x + y) / collection.filter(x => x % 2 != 0).length;
}
module.exports = average_uneven;