'use strict';

function median_to_letter(collection) {
  return 'a' + String.fromCharCode(Math.ceil((collection[(53 - 20 + 1) / 2 - 1] + collection[(53 - 20 + 1) / 2]) / 2) + 96 - 26);
}
module.exports = median_to_letter;