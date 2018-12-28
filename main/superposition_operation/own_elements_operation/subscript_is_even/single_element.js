'use strict';

function getEvenSequenceArray(collection) {
  let evenSequenceArray = collection.filter((value, index) => index % 2 === 1);
  return evenSequenceArray;
}

function chooseNoRepeatNumber(collection) {
  return collection.filter(x => collection.indexOf(x) === collection.lastIndexOf(x));
}
var single_element = function(collection) {
  return chooseNoRepeatNumber(getEvenSequenceArray(collection));
};
module.exports = single_element;