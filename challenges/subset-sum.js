/* You are given an array of integers and a target number. Write a function that returns true if
 * there is a subset of the array that sums up to the target and returns false otherwise. A subset
 * can be any size and the elements do not have to appear consecutively in the array.
 * 
 * subsetSum([3, 7, 4, 2], 5) - > true, 3 + 2 = 5
 * subsetSum([3, 34, 4, 12, 5, 12], 32) -> true, 3 + 12 + 5 + 12 = 32
 * subsetSum([8, 2, 4, 12], 13) -> false
 * subsetSum([8, -2, 1, -3], 6) -> true, 8 + 1 + (-3) = 6
 */

function subsetSum(array, target) {
	let store = 0,
			newArray = [],
			sortedArray = array.sort(function (a,b) {
				return a - b;
			});


	// Create new array of sorted values that are less than target number
	for (var i = 0; i < sortedArray.length; i++) {
		if (sortedArray[i] === target) {
			return true;
		} else if (sortedArray[i] < target) {
			newArray.push(sortedArray[i]);
		}
	}
	
	// Loop through both arrays and add values until equal to target, else return false
	for (var j = 0; j < sortedArray.length; j++) {
		// [ 3, 4, 5, 12, 12, 34 ] <-- sorted array
		for (var k = 0; k < newArray.length; k++) {
			// [ 3, 4, 5, 12, 12 ] <-- new array
			if (store === target) {
				return true;
			} 
			else if (store < target) {
				store = sortedArray[j] + newArray[k];
			} 
			else {
				return false;
			}
		}
	}


	// Attempt 1: store smaller number and keep adding number if it's still less than target value
	// for (var i = 0; i < array.length; i++) {
	// 	if (array[i] === target) {
	// 		return true;
	// 		//[2,3,4,7]
	// 	} else if (array[i] < target) {
	// 		if (store < target) {
	// 			store += array[i];
	// 		} else if (store === target) {
	// 			return true;
	// 		}
	// 	} else {
	// 		return false;
	// 	}
	// }
}

module.exports = subsetSum;
