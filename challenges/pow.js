/* Write a function that calculates x^y, where x is given as the base and y is given as the power.
 * Use recursion!
 */

function pow(base, power) {
	if (power === 0) return 1;
    else{
  		ans = base;
  		ans = ans * pow(ans, power - 1);
  		return ans;
  	}
}


module.exports = pow;
