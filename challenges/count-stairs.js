/* You are faced by a staircase that is N steps high. You can take 1 or 2 steps at a time. Write
 * a function to calculate how many different ways you can go up the flight of stairs.
 */

function countStairs(n) {
	var count = 0;
	(function step(n){
		if(n === 0) return count++;
		if(n >= 1) step(n-1);
		if(n > 1) step(n-2);
	}(n));
	return count;
}

module.exports = countStairs;
