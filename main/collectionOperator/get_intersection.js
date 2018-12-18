'use strict';

function get_intersection(collection_a, collection_b) {
  var intersectionArray = [];
  for (let i = 0; i < collection_b.length; i++) {
    if (collection_a.includes(collection_b[i])) {
      intersectionArray.push(collection_b[i]);
    }
  }
  return intersectionArray;
}
module.exports = get_intersection;