'use strict';

function count_same_elements(collection) {
  return getObj(groupObj(collection));
}

function groupObj(collection) {
  return collection.reduce((key, value) => {
    key[value] = (key[value] + 1) || 1;
    return key;
  }, {});
}

function getObj(obj) {
  return Object.keys(obj).map((value) => {
    return {
      key: value,
      count: obj[value]
    };
  });
}
module.exports = count_same_elements;