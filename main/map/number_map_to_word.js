'use strict';
var number_map_to_word = function(collection) {
  return collection = collection.map(x => String.fromCharCode(x + 96));
};
module.exports = number_map_to_word;