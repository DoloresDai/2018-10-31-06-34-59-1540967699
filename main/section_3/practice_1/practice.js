function create_updated_collection(collection_a, object_b) {
  for (let j = 0; j < collection_a.length; j++) {
    if (object_b.value.includes(collection_a[j].key)) {
      collection_a[j].count -= 1
    }
  }
  return collection_a;
}
module.exports = create_updated_collection;