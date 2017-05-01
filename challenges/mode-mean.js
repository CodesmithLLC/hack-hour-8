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
	if( array.length === 1 ) return true;
	// find mean
	var mean = array.reduce(function(a,b){return a + b;})/(array.length);
	// find mode
	var newArray = array.sort(function(a,b){return a-b});
	var currentModeCt = 1;
	var masterModeCt = 1;
	var currentSpot = 0;
	var masterSpot = 0;
	var i = 1;
	while (i + currentSpot <= newArray.length){
		// check if no other number can become mode
		if (masterModeCt > newArray.length-currentSpot) break;
		// check if next number is same as current spot, add one to modeCt
		if (newArray[currentSpot] === newArray[currentSpot+i]){
			currentModeCt++;
			i++;
		}
		// if next number is different, check if this modeCt is greater than the masterModeCt
		else if (currentModeCt >= masterModeCt){
			masterModeCt = currentModeCt;
			currentModeCt = 1;
			masterSpot = currentSpot
			currentSpot = currentSpot+i;
			i = 1;
		}
		// if currentModeCt is less than masterModeCt, move on to next number
		else{
			currentSpot = currentSpot+1;
			currentModeCt = 1;
			i = 1;
		}
	}
	return newArray[masterSpot] === mean;
}
module.exports = modemean;
