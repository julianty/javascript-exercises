const sumAll = function(start, end) {
  if (typeof(start) != typeof(1) || typeof(end) != typeof(1)) return "ERROR";
  if (start < 0 || end < 0) return "ERROR";

  let sum = 0;
  if (start < end) {
    for (let i=start; i<=end; i++) {
      sum += i;
    }
  } else {
    for (let i=end; i<=start; i++) {
      sum += i;
    }

  }
  
  return sum
};

// Do not edit below this line
module.exports = sumAll;
