'use strict';

function choose_common_elements(collection_a, collection_b) {
  var commonElement = [];
  for (let i = 0; i < collection_a.length; i++) {
    if (collection_b.includes(collection_a[i])) {
      commonElement.push(collection_a[i]);
    }
  }
  return commonElement;
}
module.exports = choose_common_elements;