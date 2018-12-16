'use strict';

function getEvenIndexArray(collection) {
  var evenIndexArray = [];
  for (let i = 0; i < collection.length; i += 2) {
    evenIndexArray.push(collection[i]);
  }
  return evenIndexArray;
}
var is_exist_element = function(collection, element) {
  return getEvenIndexArray(collection).includes(element);
  // return getEvenIndexArray(collection).some(x => x === element)
};
module.exports = is_exist_element;