/* You are faced by a staircase that is N steps high. You can take 1 or 2 steps at a time. Write
 * a function to calculate how many different ways you can go up the flight of stairs.
 */


function countStairs(n) {
    /*Approach: recursion.  All permutations to get to a certain number.  
    */
    if (n === 0) return 0; 
    if (n === 1) return 1; 
    let totalWays = 0, sum = 0; 
    function addOneorTwo (sum){
     if (sum === n) {
        console.log('sum match', sum)
        totalWays++;
        }
     else if (sum > n) return null; 
     else {
        console.log('sum', sum); 
        return addOneorTwo(sum += 2) + addOneorTwo(sum += 1);
     }
    }
    addOneorTwo(0); 
    return totalWays; 
    
    
}
countStairs(5)

module.exports = countStairs;
