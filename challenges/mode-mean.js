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
	if (!array ||!array.length){
		return "no elements";
	}
	
	let frequency = {};
	
	let mode = 0;
	let amount = 0;
	
	array.forEach(function(item){
		if (frequency[item] === undefined) {
			frequency[item]=1;
			
		}else {
			frequency[item]++;
		}
	})
	
	for (let prop in frequency){
		if (frequency[prop] > amount){
			mode = prop;
			amount = frequency[prop];
		}else if (frequency[prop] == amount){
			if (prop > mode) mode = prop; amount = frequency[prop];
			
		}
	}
	
	let mean = Math.floor(array.reduce(function(accum,curr){ 
		accum = accum + curr; return accum})/array.length);
	
	return mode == mean;
}

module.exports = modemean;
