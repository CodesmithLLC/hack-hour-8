/* You are faced by a staircase that is N steps high. You can take 1 or 2 steps at a time. Write
 * a function to calculate how many different ways you can go up the flight of stairs.
 */

function countStairs(n) {
  if (typeof n !== 'number') return false;
  if (n === 1 || n < 0) return 1;
  return n % 2 === 0 ? n / 2 : (n / 2) + 1;
}

module.exports = countStairs;
