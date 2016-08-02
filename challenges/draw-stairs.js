/* Write a function that console logs a staircase of any given height where 1 <= N <= 100.
 The staircase must climb up from left to right. The last line should only consist of asterisks,
 without any leading/trailing spaces.
 
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
    if (n > 100 || n < 1) {
        return;
    }

    var i;
    var space = ' ';
    var arr = [];
    var star = "*";
    arr.length = n;

    for (i = 0; i < n; i++) {
        arr.fill(space, 0, n - (i + 1));
        arr.fill(star, n - (i + 1));
        console.log(arr.join(''));
    }
}

// console.log(drawStairs(6));

module.exports = drawStairs;
