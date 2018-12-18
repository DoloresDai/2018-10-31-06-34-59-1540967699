function groupingCountObj(key, val) {
  var groupingCount = {
    'key': key,
    'count': val
  };
  return groupingCount;
}

function count_same_elements(collection) {
  var count = 0;
  var counts = [];
  var noRepeatArray = [];
  var groupingArray = [];
  for (let i = 0; i < collection.length; i++) {
    if (!noRepeatArray.includes(collection[i])) {
      noRepeatArray.push(collection[i]);
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

function create_updated_collection(collection_a, object_b) {
  collection_a = count_same_elements(collection_a);
  for (let j = 0; j < collection_a.length; j++) {
    if (object_b.value.includes(collection_a[j].key)) {
      collection_a[j].count = collection_a[j].count - Math.floor(collection_a[j].count / 3);
    }
  }
  return collection_a;
}
module.exports = create_updated_collection;