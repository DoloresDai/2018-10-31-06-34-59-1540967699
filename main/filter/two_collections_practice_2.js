'use strict';

function choose_no_common_elements(collection_a, collection_b) {
  var noCommonElement = [];
  for (let i = 0; i < collection_a.length; i++) {
    if (!collection_b.includes(collection_a[i])) {
      noCommonElement.push(collection_a[i]);
    }
  }
  return noCommonElement;
}
module.exports = choose_no_common_elements;