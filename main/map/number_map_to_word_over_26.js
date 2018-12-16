'use strict';
var number_map_to_word_over_26 = function(collection) {
  var codeNumber = collection.map(x => x + 96);
  for (let i = 0; i < codeNumber.length; i++) {
    if (codeNumber[i] < 123) {
      codeNumber[i] = String.fromCharCode(codeNumber[i]);
    } else {
      codeNumber[i] = 'a' + String.fromCharCode(codeNumber[i] - 26);
    }
  }
  return codeNumber;
}
module.exports = number_map_to_word_over_26;