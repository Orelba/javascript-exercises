const ftoc = function(tempF) {
  const converted = ((tempF - 32) * .5556)
  return Math.round(converted * 10) / 10
};

const ctof = function(tempC) {
  const converted = (tempC * 1.8 + 32)
  return Math.round(converted * 10) / 10
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
