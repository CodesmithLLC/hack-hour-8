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

}

var count = 6;
var space = " ";
var loop = function(n){				// blkjwe;rjwe;rh reversed. need to switch
	while(count > 0){
	
	console.log(space);
	count--;
	space += " *";
	}
};
loop(5);

module.exports = drawStairs;
