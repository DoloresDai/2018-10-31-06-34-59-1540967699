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

function create_updated_collection(collection_a, object_b) {
  collection_a = count_same_elements(collection_a);
  collection_a.map(element => {
    object_b.value.includes(element.key) ? element.count -= Math.floor(element.count / 3) : element.count;
  });
  return collection_a;
}
module.exports = create_updated_collection;