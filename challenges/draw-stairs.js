/* Write a function that console logs a staircase of any given height where 1 <= N <= 100.
 The staircase must climb up from left to right. The last line should only consist of asterisks,
 without any leading/trailing spaces.
<<<<<<< HEAD

 For example:
 drawStairs(6) ->
     *
    **
   ***
  ****
 *****
******

*/

function drawStairs(n) {
  let stairs = 1;
  const spaces = ' ';

  if (n < 1 || n > 100) {
    return 'Please enter a number between 1 and 100 (inclusive).';
  }

  while (stairs <= n) {
    console.log(spaces.repeat(n - stairs) + ('*'.repeat(stairs)));
    stairs++;
  }
}

module.exports = drawStairs;
