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

/*
Solution approach:
Edge case: check that n is a number 1 to 100
Variables: create a variable that holds an empty space ' ', variable that holds '*', and a variable that holds and console.logs steps
Do a for loop that console.logs a stair case


*/
/*
function drawStairs(n) {

	if(n < 1 || n > 100) {
	  return console.log('Must be a number from 1 to 100');
	}

	var space = ' ';
	var asterisks = '*';
	var stepArr = [];
	var step;
	var output = [];
	  
	for (var i = 0; i < n; i++) {
	  stepArr.push(asterisks);
	}

	step = stepArr.join('');
	output.unshift(step);


	for (var j = 0; j < n-1; j++) {
	  stepArr[j] = space;
	  step = stepArr.join('');
	  output.unshift(step);
	}

	for (var k = 0; k < n; k++) {
	  console.log(output[k]);
	}

}
*/

function drawStairs(n) {

	if(n < 1 || n > 100) {
	  return console.log('Must be a number from 1 to 100');
	}

	var step = [];

	for( var i = 0; i < n; i++) {
		step.push(' ');
	}

  function stepBuilder(count, arr) {
  	if (count === 0) {
  		arr[count] = '*'
  		return console.log(arr.join(''));
  	}

  	arr[count] = '*'
  	console.log(arr.join(''));
  	return stepBuilder(count-1, arr);

  }

	return stepBuilder(n-1, step);

}

module.exports = drawStairs;
