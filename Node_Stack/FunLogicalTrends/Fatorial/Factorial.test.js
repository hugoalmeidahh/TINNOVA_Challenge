const test = require('node:test');
const assert = require('node:assert');
const factorial = require('./Factorial');

test('factorial of 0', () => {
    assert.strictEqual(factorial(0), 1);
});

test('factorial of 1', () => {
    assert.strictEqual(factorial(1), 1);
});

test('factorial of 2', () => {
    assert.strictEqual(factorial(2), 2);
});

test('factorial of 3', () => {
    assert.strictEqual(factorial(3), 6);
});

test('factorial of 4', () => {
    assert.strictEqual(factorial(4), 24);
});

test('factorial of 5', () => {
    assert.strictEqual(factorial(5), 120);
});

test('factorial of 6', () => {
    assert.strictEqual(factorial(6), 720);
});

test('factorial of 7', () => {
    assert.strictEqual(factorial(7), 5040);
});

test('factorial of 8', () => {
    assert.strictEqual(factorial(8), 40320);
});

test('factorial of 9', () => {
    assert.strictEqual(factorial(9), 362880);
});

test('factorial of 10', () => {
    assert.strictEqual(factorial(10), 3628800);
});