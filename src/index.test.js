
// import in the file with the actual functions
const index = require('./index');

// test for the sum() function
test('adds 1 + 2 to equal 3', () => {
    expect(index.sum(1, 2)).toBe(3); 
});

// test for the capitalize() function
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
        }
    ];

    // check each of the test cases
    testCases.forEach((testCase) => {
        const actual = index.capitalize(testCase.input);
        expect(actual).toBe(testCase.expected);
    });
});