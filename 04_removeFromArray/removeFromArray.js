const removeFromArray = function(inputArray, ...targets) {
  let outputArray = inputArray;

  targets.forEach(item => {
    // Checks if item is present in array
    if (!(outputArray.indexOf(item) == -1)) {
      outputArray.splice(outputArray.indexOf(item), 1)
    }
  });

  return outputArray
};

// Do not edit below this line
module.exports = removeFromArray;
