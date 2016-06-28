/*
 * Given an array of numbers, determine if the mode and mean of the array are equivalent
 *
 * Caveats:
 * 	- Math.floor the mean
 * 	- If there are multiple modes, use the max of the modes
 *
 * Return true or false
 *
 */


function modemean(array) {
	var mean = array.reduce(function(a, b) {
		return a += b;
	})
	var meanAvg = Math.floor(mean / array.length);
	console.log(meanAvg)

	var max = 0; var biggest = 0;atom
	for (var i = 0; i < array.length; i++) {
		var count = 0; 
		for (var k = i; k < array.length; k++) {
			if (array[i] === array[k]) count++;
		}
		if (count >= max) {
		  max = count;
		  if (biggest < array[i]) biggest = array[i];
		}
	}
	if (meanAvg === biggest) return true; 
	else return false;
}

/*
mode: need to find which element in the array repeats the most number of times.
search using nested for loop? 
mean = 5, mode = 5
1, 5, 5, 1, 3, 5
*/

module.exports = modemean;
