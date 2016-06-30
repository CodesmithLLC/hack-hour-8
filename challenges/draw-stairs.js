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
<<<<<<< HEAD
var result = '';
var spaces = '';
var stars = '';

for (let i = 0; i < n; i++) {
	for(var k = 0; k < n - k; k++){
	spaces += '@';
	}
	for(var j = 0; j < n - spaces.length; j++){
	stars += '*';
	}
	result += spaces + stars + '/n';
}

return result;
// :(
=======

>>>>>>> 2ad08d5fbe0eb6ef7a8741fa3b9f91a29257505a
}


module.exports = drawStairs;
