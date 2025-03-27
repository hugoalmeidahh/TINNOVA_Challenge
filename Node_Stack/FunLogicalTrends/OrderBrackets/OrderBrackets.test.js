const orderBrackets = require('./OrderBrackets');

describe('OrderBrackets', () => {
    test('should return true for empty string', () => {
        expect(orderBrackets('')).toBe(true);
    });

    test('should return true for simple balanced brackets', () => {
        expect(orderBrackets('()')).toBe(true);
        expect(orderBrackets('[]')).toBe(true);
        expect(orderBrackets('{}')).toBe(true);
    });

    test('should return true for nested balanced brackets', () => {
        expect(orderBrackets('[({})]')).toBe(true);
        expect(orderBrackets('{([()])}')).toBe(true);
        expect(orderBrackets('([{}])')).toBe(true);
    });

    test('should return true for multiple balanced brackets', () => {
        expect(orderBrackets('()[]{}')).toBe(true);
        expect(orderBrackets('({})[]')).toBe(true);
        expect(orderBrackets('[{()}]')).toBe(true);
    });

    test('should return false for mismatched brackets', () => {
        expect(orderBrackets('[(})]')).toBe(false);
        expect(orderBrackets('{([)]}')).toBe(false);
        expect(orderBrackets('([{)]}')).toBe(false);
    });

    test('should return false for unclosed brackets', () => {
        expect(orderBrackets('[')).toBe(false);
        expect(orderBrackets('({')).toBe(false);
        expect(orderBrackets('{([()])')).toBe(false);
    });

    test('should return false for complex invalid cases', () => {
        expect(orderBrackets('[()()([({}{}{)])]')).toBe(false);
        expect(orderBrackets('[({})()()][')).toBe(false);
        expect(orderBrackets('([{})]')).toBe(false);
    });
}); 