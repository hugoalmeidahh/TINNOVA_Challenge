/**
 * Implements the Bubble Sort algorithm
 * @param {number[]} numbers - Array of numbers to be sorted
 * @returns {number[]} Sorted array in ascending order
 * @description
 * Bubble Sort is a simple sorting algorithm that repeatedly steps through the list,
 * compares adjacent elements and swaps them if they are in the wrong order.
 * 
 * Complexity:
 * - Time: O(n²) in worst case and average case
 * - Space: O(1)
 * 
 * @example
 * const arr = [64, 34, 25, 12, 22, 11, 90];
 * bubbleSort(arr);
 * // Returns: [11, 12, 22, 25, 34, 64, 90]
 */
function bubbleSort(numbers) {
    const TotalElementsInArray = numbers.length;
    
    for (let i = 0; i < TotalElementsInArray - 1; i++) {
        let swapped = false;
        
        console.log(`Step ${i + 1}: ${numbers[i]}`);
        
        for (let j = 0; j < TotalElementsInArray - i - 1; j++) {
            console.log(`Comparing ${numbers[j]} and ${numbers[j + 1]}`);
            
            if (numbers[j] > numbers[j + 1]) {
                console.log(`Swapping ${numbers[j]} and ${numbers[j + 1]}`);
                [numbers[j], numbers[j + 1]] = [numbers[j + 1], numbers[j]];
                
                console.log(`Array now: ${numbers}`);
                swapped = true;
            }
        }
        
        if (!swapped) break;
        console.log(`Array after step ${i + 1}: ${numbers}`);
    }
    
    return numbers;
}

module.exports = bubbleSort;