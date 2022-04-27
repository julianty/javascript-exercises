const removeFromArray = function(inputArray, ...targets) {
  let outputArray = inputArray;
  targets.forEach(item => {
    if (!(outputArray.indexOf(item) == -1)) {
      outputArray.splice(outputArray.indexOf(item), 1)
    }
  });
  return outputArray
};

// Do not edit below this line
module.exports = removeFromArray;
