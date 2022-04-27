const reverseString = function(inputString) {
    let inputStringArray = inputString.split("")
    let outputStringArray = [];

    inputStringArray.forEach(character => 
        outputStringArray.splice(0, 0, character)
    );

    return outputStringArray.join("");
};

// Do not edit below this line
module.exports = reverseString;
