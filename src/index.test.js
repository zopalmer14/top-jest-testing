
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

// 4. tests for the caesarCipher function
test('encrypts the string by shifting its characters by the shift factor', () => {
    // create an array of test cases
    const testCases = [
        {
            input: {
                str: 'Hello! This is a test input for Jest.',
                shiftFactor: 7
            },
            expected: 'Olssv! Aopz pz h alza puwba mvy Qlza.'
        },
        {
            input: {
                str: 'Hello! This is a test input for Jest.',
                shiftFactor: -5
            },
            expected: 'Czggj! Ocdn dn v ozno dikpo ajm Ezno.'
        },
        {
            input: {
                str: 'Hello! This is a test input for Jest.',
                shiftFactor: 1
            },
            expected: 'Ifmmp! Uijt jt b uftu joqvu gps Kftu.'
        },
        {
            input: {
                str: 'Hello! This is a test input for Jest.',
                shiftFactor: -1
            },
            expected: 'Gdkkn! Sghr hr z sdrs hmots enq Idrs.'
        },
    ];

    // check each of the test cases
    testCases.forEach((testCase) => {
        const actual = index.caesarCipher(testCase.input.str, testCase.input.shiftFactor);
        expect(actual).toBe(testCase.expected);
    });
});

// 5. tests for the analyzeArray function
test('analyzes an array of numbers and returns some summary statistics', () => {
    // create an array of test cases
    const testCases = [
        {
            input: [1, 8, 3, 4, 2, 6],
            expected: {
                average: 4,
                min: 1,
                max: 8,
                length: 6
            }
        },
        {
            input: [1, 2, 3, 4, 5],
            expected: {
                average: 3,
                min: 1,
                max: 5,
                length: 5
            }
        },
        {
            input: [-11, 3, 5, -8, 1],
            expected: {
                average: -2,
                min: -11,
                max: 5,
                length: 5
            }
        },
        {
            input: [],
            expected: {
                average: NaN,
                min: Infinity,
                max: -Infinity,
                length: 0
            }
        },
        {
            input: ['1', 2, 3, 4, 5],
            expected: 'Not a valid array: contains a non-numeric value'
        },
        {
            input: 'test',
            expected: 'Invalid argument: not an array'
        },
    ];

    // check each of the test cases
    testCases.forEach((testCase) => {
        const actual = index.analyzeArray(testCase.input);
        expect(actual).toEqual(testCase.expected);
    });
});