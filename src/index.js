
// simple function to test out Jest
function sum(a, b) {
    return a + b;
}

/* 
    1. A capitalize function that takes a string 
    and returns it with the first character capitalized 
*/ 
function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

/* 
    2. A reverseString function that takes a string 
    and returns it reversed 
*/ 
function reverseString(str) {
    return str.split('').reverse().join('');
}

/* 
    3. A Calculator object that contains functions for the basic operations:
    add, subtract, divide, and multiply. Each of these functions should take 
    two numbers and return the correct calculations 
*/ 
function calculator() {
    function add(operand1, operand2) {
        return operand1 + operand2;
    }

    function subtract(operand1, operand2) {
        return operand1 - operand2;
    }

    function multiply(operand1, operand2) {
        return operand1 * operand2;
    }

    function divide(operand1, operand2) {
        return operand1 / operand2;
    }

    return { 
        add,
        subtract,
        multiply, 
        divide
    };
}

/* 
    4. A caesarCipher function that takes a string and a shift factor
    and returns it with each character "shifted" 
*/ 
function caesarCipher(str, shiftFactor) {
    let resultStr = '';

    // split the string into the individual characters
    characters = str.split('');
    
    // iterate over the characters and construct the result string character by character
    characters.forEach((char) => {
        let shiftedChar = char;

        // shift then by the shiftFactor if they are letters
        if (isLetter(char)) {
            // to faciliate the wrap around for the shift we need to center and mod the char values
            const centering_val = (char === char.toUpperCase()) ? 'A'.charCodeAt() : 'a'.charCodeAt()

            const charcode = char.charCodeAt();
            shiftedChar = String.fromCharCode(mod(charcode - centering_val + shiftFactor, 26) + centering_val);
        } 

        // append the shifted char to the result string
        resultStr += shiftedChar;
    });

    return resultStr;
}

// helper function that checks whether the given char is a letter
function isLetter(char) {
    return char.match(/[A-Z|a-z]/i);
}

// helper function that implements modulus, including for negatives
function mod(val, modulus) {
    const remainder = val % modulus;
    return remainder < 0 ? remainder + modulus : remainder;
}

/* 
    5. An analyzeArray function that takes an array of numbers and returns 
    an object with the following properties: average, min, max, and length 
*/ 
function analyzeArray(arr) {
    // if the passed in argument is not an array or . . . 
    // if any value in the array is not a number, return an error string
    if (arr.constructor !== Array) {
        return 'Invalid argument: not an array';
    } else if (arr.some((val) => typeof val !== 'number')) {
        return 'Not a valid array: contains a non-numeric value';
    } else {
        return {
            average: arr.reduce((a, b) => a + b, 0) / arr.length,
            min: Math.min(...arr),
            max: Math.max(...arr),
            length: arr.length
        };
    }
}

module.exports = {
    sum,
    capitalize,
    reverseString,
    calculator,
    caesarCipher,
    analyzeArray
};
