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

	var spaces = n-1;
	var stars = 1;
	let str = "";
	let container = [];

	function printLine () {
		for (var x = 0; x < spaces; x++){
			str += " ";
		}
		spaces--
		for (var y = 0; y < stars; y++){
			str += '*'
		}
		stars++
		container.push(str);
		str = ""
	}

	for (var i = 0; i < n; i++){
		printLine();
	}

	for (var z = 0; z < container.length; z++){
		console.log(container[z]);
	}
}


module.exports = drawStairs;


