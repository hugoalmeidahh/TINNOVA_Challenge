const test = require('node:test');
const assert = require('node:assert');
const bubbleSort = require('./BubbleSort');

test('BubbleSort tests', async (t) => {
    await t.test('should sort array of numbers', () => {
        assert.deepStrictEqual(
            bubbleSort([64, 34, 25, 12, 22, 11, 90]),
            [11, 12, 22, 25, 34, 64, 90]
        );
    });

    await t.test('should handle empty array', () => {
        assert.deepStrictEqual(bubbleSort([]), []);
    });

    await t.test('should handle array with one element', () => {
        assert.deepStrictEqual(bubbleSort([1]), [1]);
    });

    await t.test('should handle already sorted array', () => {
        assert.deepStrictEqual(
            bubbleSort([1, 2, 3, 4, 5]),
            [1, 2, 3, 4, 5]
        );
    });

    await t.test('should handle reverse sorted array', () => {
        assert.deepStrictEqual(
            bubbleSort([5, 4, 3, 2, 1]),
            [1, 2, 3, 4, 5]
        );
    });
}); 