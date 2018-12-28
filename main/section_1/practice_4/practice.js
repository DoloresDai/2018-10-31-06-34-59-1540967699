function collect_same_elements(collection_a, object_b) {
  let arr = collection_a.filter(x => object_b.value.includes(x.key));
  return arr.map(x => x.key);
}
module.exports = collect_same_elements;