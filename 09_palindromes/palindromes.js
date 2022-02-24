const palindromes = function (str) {
  const lowerCaseString = str.toLowerCase()
  const puncLessString = lowerCaseString.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"") // Remove puctuation
  const cleanString = puncLessString.replace(/\s/g,"") // Remove spaces
  const reversedString = Array.from(cleanString).reverse().join('')

  if (cleanString === reversedString) return true
  return false
};

// Do not edit below this line
module.exports = palindromes;
