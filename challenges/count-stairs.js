/* You are faced by a staircase that is N steps high. You can take 1 or 2 steps at a time. Write
 * a function to calculate how many different ways you can go up the flight of stairs.
 */

//there's a pattern here, where n represents the nth + 1 fibonacci number.
//So we'll use the fib function with this new knowledge and apply it in this
//function to get the amount of possibilities.

function countStairs(n) {
  return fib(n + 1);
}

function fib(n){
  if(n === 0) return 0;
  if(n === 1) return 1;

  return fib(n - 1) + fib(n - 2);
}

module.exports = countStairs;

