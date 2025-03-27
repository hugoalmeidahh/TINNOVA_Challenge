/**
 * Calculates the sum of all natural numbers less than n that are multiples of 3 or 5
 * @param {number} n - The upper limit number
 * @returns {number} The sum of all multiples of 3 or 5 less than n
 * @description
 * This function calculates the sum of all numbers that are multiples of 3 or 5
 * and are less than the given number n. Numbers that are multiples of both 3 and 5
 * are counted only once.
 * 
 * Complexity:
 * - Time: O(n)
 * - Space: O(1)
 * 
 * @example
 * sumOfMultiples(10) // Returns 23 (3 + 5 + 6 + 9)
 * sumOfMultiples(6)  // Returns 8 (3 + 5)
 * sumOfMultiples(20) // Returns 78
 */
function sumOfMultiples(n) {
    let sum = 0;
    
    for (let i = 1; i < n; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            sum += i;
        }
    }
    
    return sum;
}

module.exports = sumOfMultiples;
