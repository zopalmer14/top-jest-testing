
// import in the file with the actual functions
const index = require('./index');

// Ex: test for the sum() function
test('adds 1 + 2 to equal 3', () => {
    expect(index.sum(1, 2)).toBe(3); 
});

// 1. tests for the capitalize() function
test('capitalizes the given string', () => {
    // create an array of test cases
    const testCases = [
        {
            input: 'test string',
            expected: 'Test string'
        },
        {
            input: 'houston',
            expected: 'Houston'
        },
        {
            input: 'a',
            expected: 'A'
        },
        {
            input: '',
            expected: ''
        }
    ];

    // check each of the test cases
    testCases.forEach((testCase) => {
        const actual = index.capitalize(testCase.input);
        expect(actual).toBe(testCase.expected);
    });
});

// 2. tests for the reverseString() function
test('reverses the given string', () => {
    // create an array of test cases
    const testCases = [
        {
            input: 'test string',
            expected: 'gnirts tset'
        },
        {
            input: 'Houston',
            expected: 'notsuoH'
        },
        {
            input: 'a',
            expected: 'a'
        },
        {
            input: '',
            expected: ''
        }
    ];

    // check each of the test cases
    testCases.forEach((testCase) => {
        const actual = index.reverseString(testCase.input);
        expect(actual).toBe(testCase.expected);
    });
});

// 3. tests for the calculator object functions - add, subtract, multiply, and divide

// calculator object for testing

const testCalculator = index.calculator();

// ADD function
test('adds two operands and returns the sum', () => {
    // create an array of test cases
    const testCases = [
        {
            input: {
                operand1: 1,
                operand2: 3
            },
            expected: 4
        },
        {
            input: {
                operand1: -5,
                operand2: 2
            },
            expected: -3
        },
        {
            input: {
                operand1: -7,
                operand2: -4
            },
            expected: -11
        },
        {
            input: {
                operand1: 0.1,
                operand2: -0.2
            },
            expected: -0.1
        },
    ];

    // check each of the test cases
    testCases.forEach((testCase) => {
        const actual = testCalculator.add(testCase.input.operand1, testCase.input.operand2);
        expect(actual).toBeCloseTo(testCase.expected);
    });
});

// SUBTRACT function
test('subtracts two operands and returns the difference', () => {
    // create an array of test cases
    const testCases = [
        {
            input: {
                operand1: 1,
                operand2: 3
            },
            expected: -2
        },
        {
            input: {
                operand1: -5,
                operand2: 2
            },
            expected: -7
        },
        {
            input: {
                operand1: -7,
                operand2: -4
            },
            expected: -3
        },
        {
            input: {
                operand1: 0.1,
                operand2: -0.2
            },
            expected: 0.3
        },
    ];

    // check each of the test cases
    testCases.forEach((testCase) => {
        const actual = testCalculator.subtract(testCase.input.operand1, testCase.input.operand2);
        expect(actual).toBeCloseTo(testCase.expected);
    });
});

// MULTIPLY function
test('multiplies two operands and returns the product', () => {
    // create an array of test cases
    const testCases = [
        {
            input: {
                operand1: 1,
                operand2: 3
            },
            expected: 3
        },
        {
            input: {
                operand1: -5,
                operand2: 2
            },
            expected: -10
        },
        {
            input: {
                operand1: -7,
                operand2: -4
            },
            expected: 28
        },
        {
            input: {
                operand1: 2.6,
                operand2: -3.4
            },
            expected: -8.84
        },
    ];

    // check each of the test cases
    testCases.forEach((testCase) => {
        const actual = testCalculator.multiply(testCase.input.operand1, testCase.input.operand2);
        expect(actual).toBeCloseTo(testCase.expected);
    });
});

// DIVIDE function
test('divides two operands and returns the quotient', () => {
    // create an array of test cases
    const testCases = [
        {
            input: {
                operand1: 1,
                operand2: 3
            },
            expected: 0.33333333
        },
        {
            input: {
                operand1: -5,
                operand2: 2
            },
            expected: -2.5
        },
        {
            input: {
                operand1: -7,
                operand2: -4
            },
            expected: 1.75
        },
        {
            input: {
                operand1: 2.6,
                operand2: -3.4
            },
            expected: -0.76470588
        },
    ];

    // check each of the test cases
    testCases.forEach((testCase) => {
        const actual = testCalculator.divide(testCase.input.operand1, testCase.input.operand2);
        expect(actual).toBeCloseTo(testCase.expected);
    });
});