const fibonacci = function(nthmember) {
  // return nthmember == 1 ? answer : fibonacci(nthmember)A
  if (nthmember < 1) return "OOPS"
  if (typeof(nthmember) == typeof("string")){
    nthmember = parseInt(nthmember);
  }
  return nthmember <= 2 ? 1 : fibonacci(nthmember - 1) + fibonacci(nthmember - 2)
};

// Do not edit below this line
module.exports = fibonacci;
