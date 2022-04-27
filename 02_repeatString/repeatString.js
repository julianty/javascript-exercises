const repeatString = function(inputString, repetitions) {
    let outputString = "";
    for (let i=0; i<repetitions; i++) {
        outputString += inputString;
    }
    if (repetitions < 0) {
        outputString = "ERROR"
    }
    return outputString
};

// Do not edit below this line
module.exports = repeatString;
