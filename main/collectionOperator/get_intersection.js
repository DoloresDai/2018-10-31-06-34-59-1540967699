'use strict';

function get_intersection(collection_a, collection_b) {
  var intersectionArray = [];
  for (let i = 0; i < collection_a.length; i++) {
    for (let j = 0; j < collection_b.length; j++) {
      if (collection_a[i] = collection_b[j]) {
        intersectionArray.push(collection_a[i]);
      }
    }
    return intersectionArray;
  }
}
module.exports = get_intersection;