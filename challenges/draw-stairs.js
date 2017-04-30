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
	var stairArr = new Array(n);

	// initial stairARr with blank spaces
	for (var j = 0; j < stairArr.length; j++) {
		stairArr[j] = ' ';
	}

	// start replacing spaces with * looping backwards
	for (var i = stairArr.length - 1; i >= 0; i--) {
		stairArr[i] = '*';
		console.log(stairArr.join(''));
	}
}

drawStairs(10);


module.exports = drawStairs;
