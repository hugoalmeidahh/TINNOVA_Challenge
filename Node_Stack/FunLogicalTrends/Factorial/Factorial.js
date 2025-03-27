/**
 * Calculates the factorial of a number using recursion
 * @param {number} n - The number to calculate factorial
 * @returns {number} The factorial of number n
 * @throws {Error} If n is negative
 * @description
 * The factorial of a number is the product of all positive integers
 * less than or equal to that number. By definition, 0! = 1.
 * 
 * Complexity:
 * - Time: O(n)
 * - Space: O(n) due to recursive call stack
 * 
 * @example
 * factorial(5) // Returns 120 (5 * 4 * 3 * 2 * 1)
 * factorial(0) // Returns 1
 * factorial(3) // Returns 6 (3 * 2 * 1)
 */
function factorial(n) {
    if (n < 0) {
        throw new Error('Factorial is not defined for negative numbers');
    }
    if (n === 0) {
        return 1;
    }
    return n * factorial(n - 1);
}

module.exports = factorial;

// for node vanilla program we need use the module.exports for export the function
