/* You are given an array of integers and a target number. Write a function that returns true if
 * there is a subset of the array that sums up to the target and returns false otherwise. A subset
 * can be any size and the elements do not have to appear consecutively in the array.
 * 
 * subsetSum([3, 7, 4, 2], 5) - > true, 3 + 2 = 5
 * subsetSum([3, 34, 4, 12, 5, 12], 32) -> true, 3 + 12 + 5 + 12 = 32
 * subsetSum([8, 2, 4, 12], 13) -> false
 * subsetSum([8, -2, 1, -3], 6) -> true, 8 + 1 + (-3) = 6
 */

/*
Approach idea:
Sort array, run a for loops that separates values into groups and then run a reduces to find sums. If target value exists, return true else return false
*/

function subsetSum(array, target) {
	if (array.indexOf(target) > -1) {
		return true;
	};

	if (array.length === 1 && array[0] !== target) {
		return false;
	};

	var sortedArr = array.sort(function(a, b) {
  		return b - a;
	});


	if ((sortedArr[0] + sortedArr[sortedArr.length-1]) > target) {
		return subsetSum(sortedArr.slice(1), target);
	} 	else {
		var values = [];
		var biggest = sortedArr[0];

		
		values.push(sortedArr.slice(1).reduce(function(previous, current){
			values.push(previous);		
		
			return previous + current;

		},biggest));

		var sorted = sortedArr.slice(1).sort();
		
		
		values.push(sorted.reduce(function(previous, current){
			if(previous > biggest) {
				values.push(previous);
			}		
		
			return previous + current;

		},biggest));

		sortedArr.slice(1).forEach(function(current){
			values.push(biggest+current);
		});

		var remnant = biggest;
		sortedArr.slice(1).forEach(function(current){
			
			if ((remnant + current) <= target) {
				remnant = remnant + current
			} 
		
		});

		values.push(remnant);

		if (values.indexOf(target) > -1) {
			return true;
		} else {
			return false;
		};

	}
	

	
}


module.exports = subsetSum;
