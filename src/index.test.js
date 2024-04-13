
// import in the file with the actual functions
const index = require('./index');

// test for the sum() function
test('adds 1 + 2 to equal 3', () => {
    expect(index.sum(1, 2)).toBe(3); 
});

// tests for the capitalize() function
test('returns the given string with the first letter capitalized', () => {
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

// tests for the reverseString() function
test('returns the given string reversed', () => {
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