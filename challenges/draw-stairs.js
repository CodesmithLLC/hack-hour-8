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

	var stairs = "";

	for (var i = 0; i < n; i++){
		
		var level = "";

		var space = n - i; 
		var star = i;
		
		
		for (var j =0; j < space-1; j++){
			level += ' ';
			
		}
		for (var k =0; k <= star; k++){
			level += '*';
		}
		
		console.log(level);
		
		stairs += level+"\n";
	}	

	//couldn't get the new line character to work so I just console logged ever iteration of outer for loop

}


module.exports = drawStairs;
