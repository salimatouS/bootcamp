const functions = require('./functions');

test('Adds 2 + 2 to equals 4', () => {
    expect(functions.add(2, 2)).toBe(4);
})

test('should not be equals', () => {
    expect(functions.add(1, 2)).not.toBe(4);
})

test('should be null', () => {
    expect(functions.isNull()).toBeNull();
})

test('should be falsy', () => {
    expect(functions.checkValue(null)).toBeFalsy();
})

test('Adds 2 + 2  to Not equals 4', () => {
    expect(functions.createUser()).toEqual({firstname: 'Brad', lastname: 'Mitchell'});
})