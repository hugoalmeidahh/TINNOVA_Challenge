/**
 * Finds the number that doesn't have a pair in the array
 * @param {number[]} numbers - Array of numbers where all numbers except one have pairs
 * @returns {number} The number that doesn't have a pair
 * @description
 * This function finds the number that appears an odd number of times in the array.
 * All other numbers in the array appear exactly twice (in pairs).
 * 
 * Complexity:
 * - Time: O(n)
 * - Space: O(1)
 * 
 * @example
 * findUnpairedNumber([9,3,9,3,7,7,9]) // Returns 9
 * findUnpairedNumber([1,2,1,2,3]) // Returns 3
 * findUnpairedNumber([4,4,5,5,6]) // Returns 6
 */
function findUnpairedNumber(numbers) {
    let result = 0;
    
    // Using XOR operation to find the unpaired number
    // XOR of a number with itself is 0
    // XOR of a number with 0 is the number itself
    for (let num of numbers) {
        result ^= num;
    }
    
    return result;
}

module.exports = findUnpairedNumber; 