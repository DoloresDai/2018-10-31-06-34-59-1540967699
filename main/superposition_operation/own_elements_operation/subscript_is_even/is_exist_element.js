'use strict';

function getEvenIndexArray(collection) {
  var evenIndexArray = [];
  return evenIndexArray = collection.filter((value, index) => index % 2 === 0);
}
var is_exist_element = function(collection, element) {
  return getEvenIndexArray(collection).includes(element);
};
module.exports = is_exist_element;