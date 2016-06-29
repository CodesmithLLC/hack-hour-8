/* Write a function that calculates x^y, where x is given as the base and y is given as the power.
 * Use recursion!
 */

function pow(base, power) {
	if(power === 0) return 1
	console.log('base', base);
	console.log('power', power);
 return base * pow(base, power-1)
	
}

//base case when power<1
pow(5,3);

module.exports = pow;
