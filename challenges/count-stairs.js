/* You are faced by a staircase that is N steps high. You can take 1 or 2 steps at a time. Write
 * a function to calculate how many different ways you can go up the flight of stairs.
 */

function countStairs(n) {

  function fib(n2){
		if (n2 <= 1) {
			return n2;
		}

		return fib(n2-1) + fib(n2-2);
	}

	return fib(n+1)
	// console.log(n+1)

//   if (n <= 1) {
//   return 1;
// } else if (n === 2) {
//   return 2;
// }
//
// return countStairs(n-1) + countStairs(n-2);

}

module.exports = countStairs;
