'use strict';

function compute_median(collection) {
  var len = collection.length;
  var medium = Math.floor((len - 1) / 2);
  if (len % 2 != 0) {
    return collection[medium]
  } else {
    return (collection[medium] + collection[medium + 1]) / 2;
  }
}
module.exports = compute_median;