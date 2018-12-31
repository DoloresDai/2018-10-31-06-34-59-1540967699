'use strict';

function count_same_elements(collection) {
  return getObj(groupObj(collection));
}

function groupObj(collection) {
  return collection.reduce((pre, value) => {
    pre[value] = (pre[value] + 1) || 1;
    return pre;
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