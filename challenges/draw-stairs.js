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
	for(var i = 1; i <= n <= 100; i++){
		var spaces = ' ';
		var steps = '*'
	var theseStairs = spaces.repeat(n-i).concat(steps.repeat(i));
	console.log(theseStairs);
}

module.exports = drawStairs;
