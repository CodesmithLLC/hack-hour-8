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
 	// find mode
 	// create an object for the

 	var sum = 0;
 	var modeObj = {};

 	array.forEach(function(num) {
 		sum += num;
 		modeObj[num] = 0;
 	});

 	array.forEach(function(num) {
 		modeObj[num] += 1;
 	});

 	console.log(modeObj);
 	var mode = { num: null, count: 0 };
 	for (var key in modeObj) {
 			if (mode.num === null) {
 				mode.num = key;
 				mode.count = modeObj[key];
 			} else if (modeObj[key] === mode.count && Number(key) > mode.num) {
 				mode.num = key;
 				mode.count = modeObj[key];
 			} else if (modeObj[key] > mode.count) {
 				mode.num = key;
 				mode.count = modeObj[key];
 			}
 	}

 	console.log(mode.num);
 	var mean = Math.floor(sum / array.length);
 	console.log(mean);
 	return mode.num == mean ? true : false;
 }

module.exports = modemean;
