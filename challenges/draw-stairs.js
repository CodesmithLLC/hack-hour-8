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
	var col, row = n;
	var result = '';
	for (var i = 1; i <= n; i++){
		for (var k = n; k > 0; k--){
			if (k > i) result += " ";
			else result += "*";
		}
		result += "\n";
	}
	console.log(result);
}


module.exports = drawStairs;
