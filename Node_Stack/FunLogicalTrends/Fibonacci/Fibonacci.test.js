const fibonacci = require('./Fibonacci');

describe('Fibonacci', () => {
    test('deve retornar 0 para n = 0', () => {
        expect(fibonacci(0)).toBe(0);
    });

    test('deve retornar 1 para n = 1', () => {
        expect(fibonacci(1)).toBe(1);
    });

    test('deve retornar 1 para n = 2', () => {
        expect(fibonacci(2)).toBe(1);
    });

    test('deve retornar 2 para n = 3', () => {
        expect(fibonacci(3)).toBe(2);
    });

    test('deve retornar 3 para n = 4', () => {
        expect(fibonacci(4)).toBe(3);
    });

    test('deve retornar 5 para n = 5', () => {
        expect(fibonacci(5)).toBe(5);
    });
}); 