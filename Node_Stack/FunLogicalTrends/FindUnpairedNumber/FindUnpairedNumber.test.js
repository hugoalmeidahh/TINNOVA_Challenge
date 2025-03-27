const findUnpairedNumber = require('./FindUnpairedNumber');

describe('FindUnpairedNumber', () => {
    test('should find unpaired number in example case', () => {
        expect(findUnpairedNumber([9,3,9,3,7,7,9])).toBe(9);
    });

    test('should find unpaired number in simple case', () => {
        expect(findUnpairedNumber([1,2,1,2,3])).toBe(3);
    });

    test('should find unpaired number at the end', () => {
        expect(findUnpairedNumber([4,4,5,5,6])).toBe(6);
    });

    test('should find unpaired number at the beginning', () => {
        expect(findUnpairedNumber([1,2,2,3,3])).toBe(1);
    });

    test('should handle array with single element', () => {
        expect(findUnpairedNumber([5])).toBe(5);
    });

    test('should handle array with negative numbers', () => {
        expect(findUnpairedNumber([-1,2,2,-3,-3])).toBe(-1);
    });
}); 