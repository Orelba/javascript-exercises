const add = function(num1, num2) {
	return num1 + num2
};

const subtract = function(num1, num2) {
	return num1 - num2
};

const sum = function(array) {
  return array.reduce((prevVal, currentVal) => prevVal + currentVal, 0)
};

const multiply = function(array) {
  return array.reduce((prevVal, currentVal) => prevVal * currentVal)
};

const power = function(num1, num2) {
	return num1 ** num2
};

const factorial = function(num) {
	let rval = 1
  for (let i = 2; i <= num; i++) {
    rval = rval * i
  }
  return rval
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
