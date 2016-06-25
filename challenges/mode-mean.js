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
	if (arguments.length = 0 || typeof arguments[0] !== "object") return "you suck"
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
	var numArray = [];
	for (var i = 0; i <= sortedArray.length; i++){
		if (sortedArray[i] === sortedArray[i-1]) numArray.push(sortedArray[i]);
		else {
			multArray.push(numArray);
			numArray = [sortedArray[i]];
		}
	}
	var modeArray = [];
	var modeLen = 0;
	for (var j = 0; j < multArray.length; j++){
		var arrayLen = multArray[j].length;
		if (arrayLen > modeLen){ 
			modeLen = arrayLen;
			modeArray = [];
			modeArray = modeArray.concat(multArray[j])
		}
		else if (arrayLen === modeLen) {
			modeLen = arrayLen;
			modeArray = modeArray.concat(multArray[j]);
		}
	}
	var mode = modeArray[modeArray.length - 1];
	function add(a, b) {
		return a + b;
	}
	var mean = Math.floor(sortedArray.reduce(add, 0)/(sortedArray.length));
	return (mean === mode);
}

module.exports = modemean;
