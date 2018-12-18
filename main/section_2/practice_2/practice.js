function groupingCountObj(key, val) {
  var groupingCount = {
    'key': key,
    'count': val
  };
  return groupingCount;
}

function convertNumberToLetter(collection) {
  for (let n = 0; n < collection.length; n++) {
    if (/[0-9]/.test(collection[n])) {
      for (let d = 0; d < collection[n].replace(/[^a-z]/, "").replace(/[a-z]/, ""); d++) {
        collection.splice(n + d, 0, collection[n].match(/[a-z]/g)[0]);
      }
    }
  }
  return collection;
}

function count_same_elements(collection) {
  var count = 0;
  var counts = [];
  var noRepeatArray = [];
  var groupingArray = [];
  collection = convertNumberToLetter(collection);
  for (let i = 0; i < collection.length; i++) {
    if (!noRepeatArray.includes(collection[i])) {
      noRepeatArray.push(collection[i].match(/[a-z]/ig)[0]);
    }
  }
  for (let j = 0; j < noRepeatArray.length; j++) {
    for (let k = 0; k < collection.length; k++) {
      if (noRepeatArray[j] === (collection[k])) {
        count++;
      }
    }
    counts.push(count);
    count = 0;
  }
  for (let index in noRepeatArray) {
    groupingArray.push(groupingCountObj(noRepeatArray[index], counts[index]));
  }
  return groupingArray;
}
module.exports = convertNumberToLetter;