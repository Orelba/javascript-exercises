const removeFromArray = function(array, ...args) {
  for (value of args) {
    const vIndex = array.indexOf(value)
    if (vIndex !== -1) array.splice(vIndex, 1)
  }
  return array
};

// Do not edit below this line
module.exports = removeFromArray;