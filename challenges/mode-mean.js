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
	let newObj = {},
		mode = 0,
		frequency = 0,
		sum = 0,
		mean;
	

	// check for mode
	for (let i = 0; i < array.length; i++) {
		if (newObj[array[i]] === undefined) {
			newObj[array[i]] = 1;
		} else {
			newObj[array[i]]++;
		}
	}
	
	for (let key in newObj) {
		if (newObj[key] > frequency) {
			mode = key;
			frequency = newObj[key];
		}
		
		if (newObj[key] === frequency) {
			mode = Math.max(key, mode)
			frequency = newObj[key];
		}
	}

	// check for mean
	array.forEach(function(values) {
		sum += values;
	});
	
	mean = Math.floor(sum / array.length);

	// compare mean and mode
	if (mean === mode) {
		return true;
	} else {
		return false;
	}
}

module.exports = modemean;
