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
module.exports = convertNumberToLetter;