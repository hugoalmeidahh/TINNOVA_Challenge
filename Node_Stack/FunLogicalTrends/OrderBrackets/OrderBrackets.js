/**
 * Checks if a string containing different types of brackets is properly ordered and balanced
 * @param {string} str - The string containing brackets
 * @returns {boolean} true if brackets are properly balanced, false otherwise
 * @description
 * This function checks if different types of brackets ((), [], {}) are properly balanced.
 * Each opening bracket must have a corresponding closing bracket of the same type.
 * 
 * Complexity:
 * - Time: O(n), where n is the string length
 * - Space: O(n) in worst case
 * 
 * @example
 * orderBrackets("()") // Returns true
 * orderBrackets("[(})]") // Returns false
 * orderBrackets("[({})]") // Returns true
 */
function orderBrackets(str) {
    const stack = [];
    const pairs = {
        ')': '(',
        ']': '[',
        '}': '{'
    };
    
    for (let char of str) {
        // If it's an opening bracket, push to stack
        if (char === '(' || char === '[' || char === '{') {
            stack.push(char);
        }
        // If it's a closing bracket
        else if (char === ')' || char === ']' || char === '}') {
            // If stack is empty or last opening bracket doesn't match
            if (stack.length === 0 || stack.pop() !== pairs[char]) {
                return false;
            }
        }
    }
    
    // Stack should be empty if all brackets are properly closed
    return stack.length === 0;
}

module.exports = orderBrackets;
