
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

module.exports = {
    sum,
    capitalize,
    reverseString,
};
