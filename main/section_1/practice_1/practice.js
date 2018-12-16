function collect_same_elements(collection_a, collection_b) {
  var commonElement = [];
  var index = 0;
  for (index in collection_a) {
    if (collection_b.includes(collection_a[index])) {
      commonElement.push(collection_a[index]);
    }
  }
  return commonElement;
}
module.exports = collect_same_elements;