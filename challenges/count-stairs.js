/* You are faced by a staircase that is N steps high. You can take 1 or 2 steps at a time. Write
 * a function to calculate how many different ways you can go up the flight of stairs.
 */
//leverage fibonacci function



function fib(n) {
	if (n <= 1) {
		return 1
	}
	return fib(n - 1) + fib(n - 2)
}
//n needs to be > 0
//1 stair = 1 way
//2 stairs = 2 ways
//3 stairs (1,1,1) (2,1) (1,2)
//base case n <= 2
// function countStairs(n) {
// 	if(n <=0 ) return undefined
// 	if(n <= 1) return n
	
// 	console.log('N-2', fib(n-2))
// 	console.log('N-1', fib(n-1))
// 	return fib(n-2) + fib(n-1)
// }

function countStairs(n) {
	if(n <=0 || typeof n === NaN) return undefined
	if(n <= 2) return n
	

	return countStairs(n-2) + countStairs(n-1)
}

module.exports = countStairs;
