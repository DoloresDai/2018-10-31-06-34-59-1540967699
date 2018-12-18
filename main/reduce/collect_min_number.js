'use strict';

function collect_min_number(collection) {
  return collection.reduce((x, y) => x < y ? x : y);
}
module.exports = collect_min_number;