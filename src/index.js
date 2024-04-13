
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

module.exports = {
    sum,
    capitalize,
    reverseString,
    calculator
};
