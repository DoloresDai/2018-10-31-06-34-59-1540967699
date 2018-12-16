'use strict';

function double_to_one(collection) {
  return ([].concat.apply([], collection));
  // var doubleToOne = [];
  // for (let i = 0; i < collection.length; i++) {
  //   for (let j = 0; j < 2; j++) {
  //     if (!collection[i][j] == undefined) {
  //       doubleToOne.push(collection[i][j]);
  //     }
  //   }
  // }
  // return doubleToOne;
}
// console.log(double_to_one([
//  ));
//output []???
module.exports = double_to_one;