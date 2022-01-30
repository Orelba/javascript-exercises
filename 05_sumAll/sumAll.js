const sumAll = function(int1, int2) {
  if (int1 < 0 || int2 < 0 ||
     typeof int1 !== 'number' || typeof int2 !== 'number') return 'ERROR'

  let small = int1
  let big = int2
  let sum = 0
  
  if (int1 > int2) {
    small = int2
    big = int1
  }

  while (small <= big) {
    sum += small
    small++
  }

  return sum
};

// Do not edit below this line
module.exports = sumAll;

