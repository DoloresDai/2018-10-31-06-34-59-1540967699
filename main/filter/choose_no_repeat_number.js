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
module.exports = choose_no_repeat_number;