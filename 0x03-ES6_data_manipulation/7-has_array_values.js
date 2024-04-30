function hasValuesFromArray(set, array) {
  const val = array.every((item) => set.has(item));
  return val;
}

export default hasValuesFromArray;
