'use strict';

function choose_no_repeat_number(collection) {
  var noRepeatArray = [];
  for (let i = 0; i < collection.length; i++) {
    if (!noRepeatArray.includes(collection[i])) {
      noRepeatArray.push(collection[i]);
    }
  }
  return noRepeatArray;
}

function double_to_one(collection) {
  var getArray = [].concat.apply([], collection);
  return choose_no_repeat_number(getArray);
}
module.exports = double_to_one;