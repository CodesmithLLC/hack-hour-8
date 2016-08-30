/* You are faced by a staircase that is N steps high. You can take 1 or 2 steps at a time. Write
 * a function to calculate how many different ways you can go up the flight of stairs.
 */

function countStairs(n) {
  var combos = [];
  var sum = 0;
  // function combinations(target) {
  //   if (sum === n) return combos.push(target);
  //   if (sum === n-1) return combos.push(target.concat([1]))
  //   for (var i = 1; i < 3; i++) {
  //     target.push(i);
  //     sum = sum + i;
  //     combinations(target);
  //   }
  // }
  // combinations([]);
  return combos;
}

module.exports = countStairs;
