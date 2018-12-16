'use strict';

function get_union(collection_a, collection_b) {
  if (collection_a.length - collection_b.length > 0) {
    for (let i = 0; i < collection_a.length; i++) {
      if (!collection_b.includes(collection_a[i])) {
        collection_b.push(collection_a[i]);
      }
    }
    return collection_b;
  } else {
    for (let i = 0; i < collection_b.length; i++) {
      if (!collection_a.includes(collection_b[i])) {
        collection_a.push(collection_b[i]);
      }
    }
  }
  return collection_a;
}
module.exports = get_union;