/* You are faced by a staircase that is N steps high. You can take 1 or 2 steps at a time. Write
 * a function to calculate how many different ways you can go up the flight of stairs.
 */

function countStairs(n) {
	var ways = 0;
	recursive(n);
	return ways;

	function recursive(total) {
		if(total < 0) return false;
		else if(total === 0) {
			ways++;
			return false;
		}
		return recursive(total-1) || recursive(total-2);
	}
}



module.exports = countStairs;
