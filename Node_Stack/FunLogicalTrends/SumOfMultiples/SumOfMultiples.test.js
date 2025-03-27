const sumOfMultiples = require('./SumOfMultiples');

describe('SumOfMultiples', () => {
    test('deve retornar 0 para n = 1', () => {
        expect(sumOfMultiples(1)).toBe(0);
    });

    test('deve retornar 0 para n = 2', () => {
        expect(sumOfMultiples(2)).toBe(0);
    });

    test('deve retornar 3 para n = 4', () => {
        expect(sumOfMultiples(4)).toBe(3);
    });

    test('deve retornar 8 para n = 6', () => {
        expect(sumOfMultiples(6)).toBe(8);
    });

    test('deve retornar 23 para n = 10', () => {
        expect(sumOfMultiples(10)).toBe(23);
    });

    test('deve retornar 233168 para n = 1000', () => {
        expect(sumOfMultiples(1000)).toBe(233168);
    });
}); 