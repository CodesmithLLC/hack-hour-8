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
		let modeArr = array.sort();
		let mode;
		let modeObj = {0: 0};
		let counter = 0;
		
		//find mode
		for (var i = 0; i < array.length; i++){
			if (array[i] !== array[i+1]){
				counter++;
				modeObj[counter] = array[i];
				counter = 0;
			}
			else counter++;
			if (array[i] === array[array.length]) modeObj[counter] = array[i];
			console.log(modeObj)
		}
		let props = Object.keys(modeObj).sort();
		mode = modeObj[props[props.length-1]]
		
		//find mean
		let total = 0;
		let mean;
		let len = array.length;
		for (var y = 0; y < len; y++){
			total += array[y];
		}
		mean = total/len;
		
		//compare mode and mean
		return mean === mode;

}

module.exports = modemean;
