'use strict';

function compute_average(collection) {
  return collection.reduce(function(prev, curr) {
    return prev + curr;
  }) / collection.length;
}
module.exports = compute_average;