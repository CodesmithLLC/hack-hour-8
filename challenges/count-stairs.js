/* You are faced by a staircase that is N steps high. You can take 1 or 2 steps at a time. Write
 * a function to calculate how many different ways you can go up the flight of stairs.
 */

function countStairs(n) {
  var possibilites = 0;
  if(n > 0) {
    possibilites += Math.floor(n/2);
    possibilites += n % 2;
    return countStairs(n - 1);
  }
  return possibilites;
}

module.exports = countStairs;

console.log(countStairs(10));
