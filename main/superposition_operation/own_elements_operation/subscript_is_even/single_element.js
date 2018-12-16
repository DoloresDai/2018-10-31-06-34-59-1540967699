'use strict';

function getEvenSequenceArray(collection) {
  var evenSequenceArray = [];
  for (let i = 1; i < collection.length; i += 2) {
    evenSequenceArray.push(collection[i]);
  }
  return evenSequenceArray;
}

function chooseNoRepeatNumber(collection) {
  var noRepeatArray = [];
  var index = 0;
  for (index in collection) {
    if (collection.indexOf(collection[index]) === collection.lastIndexOf(collection[index])) {
      noRepeatArray.push(collection[index]);
    }
  }
  return noRepeatArray;
}
var single_element = function(collection) {
  return chooseNoRepeatNumber(getEvenSequenceArray(collection));
};
module.exports = single_element;