/* Write a function that calculates x^y, where x is given as the base and y is given as the power.
 * Use recursion!
 */

 //SET BASE CASE: if power === 0, return base.  recurse down to the base case, then return each result back up to initial case. 

function pow(base, power) {
    if (power === 0) return 1; 
    if (power === 1) return base; 
    while (power > 1){
    return pow(base * power-1); 
   }
   return base * pow(base * power); 
}

module.exports = pow;
