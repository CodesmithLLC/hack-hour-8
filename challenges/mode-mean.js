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
 	var sum = 0;
 	var modeObj = {};
 	var mode = array[0];
 	var modeCount = 0;

 	array.forEach(function(num) {
 		sum += num;
 		if (modeObj.hasOwnProperty(num)) modeObj[num] += 1;
 		else modeObj[num] = 1;
 		if (modeObj[num] == modeCount && num > mode) {
 			mode = num;
 			modeCount = modeObj[num];
 		} else if (modeObj[num] > modeCount) {
 			mode = num;
 			modeCount = modeObj[num];
 		}
 	});
 	var mean = Math.floor(sum/array.length);
 	return mode == mean ? true : false;
 }

module.exports = modemean;
