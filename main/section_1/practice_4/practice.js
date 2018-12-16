function collect_same_elements(collection_a, object_b) {
  var commonElement = [];
  var index = 0;
  for (index in collection_a) {
    if (object_b.value.includes(Object.values(collection_a[index])[0])) {
      commonElement.push(Object.values(collection_a[index])[0]);
    }
  }
  return commonElement;
}
module.exports = collect_same_elements;