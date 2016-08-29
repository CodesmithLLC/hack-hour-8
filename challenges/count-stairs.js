/* You are faced by a staircase that is N steps high. You can take 1 or 2 steps at a time. Write
 * a function to calculate how many different ways you can go up the flight of stairs.
 */

 /*
You can choose from n single steps + 0 double steps to Math.floor n/2 double steps + (n - Math.floor n/2) single steps
 */

function countStairs(n) {
  if(n <= 4) {
    return n;
  }
  var steps = [1,2];
  var count;


}

module.exports = countStairs;
