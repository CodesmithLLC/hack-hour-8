/* You are faced by a staircase that is N steps high. You can take 1 or 2 steps at a time. Write
 * a function to calculate how many different ways you can go up the flight of stairs.
 */

function countStairs(n) {
	// have counter to keep track of how many permutations were made
	let counter = 0;

	// base case to end recursion
	if (n === 0) return 0;
	if (n === 1) return 1;

	// after first step, it should enter recursion where it will take 1 step or 2 steps,
	while (n > 0) {

		// subtract the amount of steps from n and repeat until n = 0.
		return countStairs(n - 1) + countStairs(n - 2);
		counter++;
	}

	return counter;
}

module.exports = countStairs;
