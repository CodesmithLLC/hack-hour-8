/* You are faced by a staircase that is N steps high. You can take 1 or 2 steps at a time. Write
 * a function to calculate how many different ways you can go up the flight of stairs.
 */

// this returns, as instructed, how many different ways one could go up the stairs taking one or two stairs with each step. If we wanted to return some list of these combinations, that would be a different function.

function countStairs(n) {
  if (n < 0 || typeof n !== 'number') return false;
  return n % 2 === 0 ? n / 2 : (n / 2) + 1;
}

module.exports = countStairs;
