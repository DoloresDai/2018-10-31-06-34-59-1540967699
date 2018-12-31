function convertNumberToLetter(collection) {
  return getObj(groupObj(collection));
}

function groupObj(collection) {
  return collection.reduce((pre, value) => {
    let letter = value.match(/[a-zA-Z]+/g)[0];
    let number = value.match(/\d+/g);
    let count = number ? number : 1;
    pre[letter] = (pre[letter] + parseInt(count)) || parseInt(count);
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
  collection_a = convertNumberToLetter(collection_a);
  collection_a.map(element => {
    object_b.value.includes(element.key) ? element.count -= Math.floor(element.count / 3) : element.count;
  });
  return collection_a;
}
module.exports = create_updated_collection;