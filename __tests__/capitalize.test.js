const capitalize = require('../capitalize');

test('Capitalizes the first letter in the word', () => {
    expect(capitalize('racecar')).toBe('Racecar');
});