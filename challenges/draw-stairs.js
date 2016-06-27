/* Write a function that console logs a staircase of any given height where 1 <= N <= 100.
 The staircase must climb up from left to right. The last line should only consist of asterisks,
 without any leading/trailing spaces.
<<<<<<< HEAD

 For example:
 drawStairs(6) ->
=======
 
 For example:     
 drawStairs(6) ->          
>>>>>>> 2ad08d5fbe0eb6ef7a8741fa3b9f91a29257505a
     *
    **
   ***
  ****
 *****
******

*/

function drawStairs(n) {
<<<<<<< HEAD
  let stairs = 1;
  const spaces = ' ';

  if (n < 1 || n > 100) {
    console.log('Please enter a number between 1 and 100 (inclusive).');
    return;
  }

  while (stairs <= n) {
    console.log(spaces.repeat(n - stairs) + ('*'.repeat(stairs)));
    stairs++;
  }
}

=======

}


>>>>>>> 2ad08d5fbe0eb6ef7a8741fa3b9f91a29257505a
module.exports = drawStairs;
