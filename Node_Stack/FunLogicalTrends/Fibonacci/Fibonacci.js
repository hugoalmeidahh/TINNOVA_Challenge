/**
 * Calculates the nth number in the Fibonacci sequence
 * 
 * @param {number} n - The position in the sequence
 * @returns {number} - The Fibonacci number at position n
 * @throws {Error} - If n is negative
 * 
 * @description
 * The Fibonacci sequence is a series of numbers where each number is the sum
 * of the two preceding ones, starting from 0 and 1.
 * 
 * Complexity:
 * - Time: O(n)
 * - Space: O(1)
 * 
 * @example
 * fibonacci(0) // Returns 0
 * fibonacci(1) // Returns 1
 * fibonacci(2) // Returns 1
 * fibonacci(3) // Returns 2
 * fibonacci(4) // Returns 3
 * fibonacci(5) // Returns 5
 * 
 * Sequence: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ...
 */
function fibonacci(n) {
    if (n < 0) {
        throw new Error('Number cannot be negative');
    }
    if (n === 0) return 0;
    if (n === 1) return 1;
    
    let prev = 0;
    let curr = 1;
    
    for (let i = 2; i <= n; i++) {
        const next = prev + curr;
        prev = curr;
        curr = next;
    }
    
    return curr;
}

module.exports = fibonacci; 