const palindromes = function (inputString) {
  // remove punctuation
  inputString = inputString.replaceAll(/[,!.\s]/ig, "")
  inputString = inputString.toLowerCase();
  console.log(inputString);

  // const reversedString = inputString.reduce((finalString, char))
  let reversedString = [];
  Array.from(inputString).forEach( char => 
    reversedString.splice(0, 0, char)
  );
  reversedString = reversedString.join('');

  

  return reversedString == inputString ? true : false
};

// Do not edit below this line
module.exports = palindromes;
