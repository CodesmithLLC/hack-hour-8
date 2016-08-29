/* You are faced by a staircase that is N steps high. You can take 1 or 2 steps at a time. Write
 * a function to calculate how many different ways you can go up the flight of stairs.
 */

function countStairs(n) {
  if (n === 0) return 0;
  var a = 1;
  var b = 1;
  for (var i = 1; i < n; i++) {
    var c = a;
    a = b;
    b += c;
  }
  return b;
}

module.exports = countStairs;
