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
	var sortedArr = array.sort();
	var totalSum = sortedArr.reduce(function(a, b) {
  return a + b;
});
	var mean = Math.floor(totalSum / sortedArr.length);
	var mode;
	for(var i = sortedArr.length; i > 0; i--){
		if(sortedArr[i] === sortedArr[i - 1]) {
			mode = sortedArr[1]
			return mode;
		}

	}
	return mode === mean;
}

module.exports = modemean;
