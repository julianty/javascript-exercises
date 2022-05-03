const add = function(a, b) {
  return a + b
};

const subtract = function(a, b) {
	return a - b
};

const sum = function(sumArray) {
	return sumArray.reduce((sum, arrayItem) => sum += arrayItem, 0)
};

const multiply = function(multArray) {
 return multArray.reduce((product, arrayItem) => product *= arrayItem, 1) ;
};

const power = function(a, b) {
	return a ** b
};

const factorial = function(a) {
  let factorialProduct = 1;
  for(let i=1; i<=a; i++) {
    factorialProduct *= i;
  };
  return factorialProduct
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
