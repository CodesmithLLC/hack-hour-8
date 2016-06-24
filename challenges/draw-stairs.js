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
	var i = 1;
	while(i <= n){
		var stairString = '';
		
	// solution A
	// for (var j = 0; j < n - i; j++){
	// 	stairString += ' ';	
	// }
	// for (var k = 1; k <= i; k++){
	// 	stairString += '*';
	// }

	//solution B
		var j = 1;
		while (j <= n-i){
			stairString += ' ';
			j++;
		}
		while (j <= n){
			stairString += '*';
			j++
		}

		console.log(stairString);
		i++;
	}
}


module.exports = drawStairs;
