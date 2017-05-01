/* You are faced by a staircase that is N steps high. You can take 1 or 2 steps at a time. Write
 * a function to calculate how many different ways you can go up the flight of stairs.
 */



function countStairs(n) {
    /*Approach: Handle 0 and 1 as base cases, start with n, go
    down to zero or 1, and add result (line 21). 
    */
   if (n === 0) {
    //console.log('match0', n)
    return 0; 
   }
    else if (n === 1) {
    //console.log('match1', n)    
    return 1; 
    }
  else {
    console.log(n); 
    return countStairs(n-1) + countStairs(n-2); 
  }
    
}

module.exports = countStairs;
