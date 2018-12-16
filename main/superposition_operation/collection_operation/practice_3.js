'use strict';

function hybrid_operation_to_uneven(collection) {
  return collection.filter(x => x % 2 != 0).map(x => x * 3 + 5).reduce((x, y) => x + y);
}
module.exports = hybrid_operation_to_uneven;