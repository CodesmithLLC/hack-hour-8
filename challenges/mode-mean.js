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
   function mergeSort(array) {
   if (array.length === 1) return array;
   var halfSize = array.length/2;
   var firstHalf = array.slice(halfSize);
   var secondHalf = array.slice(0, halfSize);
   function compareAndConcat(x, y){
	var depth = x.length + y.length
	var res = [];
	while (res.length < depth){
		if (x.length === 0){
			res = res.concat(y);
			return res;
		}
		if (y.length === 0){
			res = res.concat(x);
			return res;
		}
		if (x[0] < y[0]) {
			res.push(x[0]);
			x.shift();
		} else {
			res.push(y[0]);
			y.shift();
		}
	}
   }
   return compareAndConcat(mergeSort(firstHalf), mergeSort(secondHalf));
}
	const sortedArray = mergeSort(array);
	var multArray = [];
	var currCount = 0;
	var modeCount = 0;
	var mode;
	for (var i = 1; i < sortedArray.length; i++){
		var current = sortedArray[i];
		if (sortedArray[i] == sortedArray[i-1]){
			currCount++;
			if (currCount > modeCount){
				modeCount = currCount;
				mode = sortedArray[i];
			}
		} else {
			currCount = 0;
		}
	}
	function add(a, b) {
    	return a + b;
	}
	if (multArray.length > 0){
		// still in testing phase, stand by beep boop beep boop
		mode = Math.max.apply(null, multArray);
	}
	var mean = Math.floor(sortedArray.reduce(add, 0)/(sortedArray.length));
	return (mean == mode);
}

module.exports = modemean;
