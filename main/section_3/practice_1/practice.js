function create_updated_collection(collection_a, object_b) {
  collection_a.map(element => {
    object_b.value.includes(element.key) ? element.count -= 1 : element.count;
  });
  return collection_a;
}
module.exports = create_updated_collection;