/**
 * Calculates the percentage relation between different types of votes in an election
 * @param {number} totalVoters - Total number of voters
 * @param {number} validVotes - Total number of valid votes
 * @param {number} blankVotes - Total number of blank votes
 * @param {number} nullVotes - Total number of null votes
 * @returns {Object} Object containing the percentage of each vote type
 * @throws {Error} If total voters is zero or sum of votes doesn't match total
 * @description
 * This function calculates the percentage distribution of different types of votes
 * in an election: valid votes, blank votes, and null votes.
 * 
 * Complexity:
 * - Time: O(1)
 * - Space: O(1)
 * 
 * @example
 * calculateVoteRelation(100, 80, 15, 5)
 * // Returns: {
 * //   validVotesPercentage: "80.00",
 * //   blankVotesPercentage: "15.00",
 * //   nullVotesPercentage: "5.00"
 * // }
 */
function calculateVoteRelation(totalVoters, validVotes, blankVotes, nullVotes) {
    // Input validation
    if (totalVoters <= 0) {
        throw new Error('Total voters must be greater than zero');
    }
    
    if (validVotes + blankVotes + nullVotes !== totalVoters) {
        throw new Error('Sum of votes must equal total voters');
    }
    
    // Calculate percentages
    const validPercentage = (validVotes / totalVoters) * 100;
    const blankPercentage = (blankVotes / totalVoters) * 100;
    const nullPercentage = (nullVotes / totalVoters) * 100;
    
    return {
        validVotesPercentage: validPercentage.toFixed(2),
        blankVotesPercentage: blankPercentage.toFixed(2),
        nullVotesPercentage: nullPercentage.toFixed(2)
    };
}

module.exports = calculateVoteRelation;
