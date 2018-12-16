'use strict';

function getEvenArray(collection) {}

function even_to_letter(collection) {
  return collection.filter(x => x % 2 === 0).map(x => String.fromCharCode(x + 96));
}
module.exports = even_to_letter;