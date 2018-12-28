'use strict';

function choose_no_repeat_number(collection) {
  return [...new Set(collection)];
}

function double_to_one(collection) {
  var getArray = [].concat.apply([], collection);
  return choose_no_repeat_number(getArray);
}
module.exports = double_to_one;