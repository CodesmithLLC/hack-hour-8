/* Write a function that calculates x^y, where x is given as the base and y is given as the power.
 * Use recursion!
 */

 //SET BASE CASE: if power === 0, return base.  recurse down to the base case, then return each result back up to initial case. 

function pow(base, power) { 
  if (isNaN(base) || isNaN(power)) return undefined; 
    if (power === 0) return 1; 
    return base * pow(base, power-1);  
   
}
module.exports = pow;
//WITH A FOR LOOP 
    // res = 1; 
    // for (var i = 1; i <= power, i++){
    //     res *= base; 
    //     console.log (res); 
    // }
    // return res; 