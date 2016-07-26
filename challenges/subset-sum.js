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
 	var combos = [];

 	permutation(array, []);

 	function permutation(begArr,arr) {
 	  if (begArr.length === 0) combos.push(arr.join(',').split(','));
 	  for (var i = 0, l = begArr.length; i < l; i++) {
 	    let s = begArr.splice(i,1);
 	    arr.push(s);
 	    permutation(begArr,arr);
 	    arr.pop();
 	    begArr.splice(i,0,s);
 	  }
 	}

 	var finalArr = combos.map(function(arrToNum){
 	   return arrToNum.map(function(e){
 	  	return parseInt(e);
 	   });
 	  });

 	var sum = 0;
 	for (var i = 0; i < finalArr.length; i++) {
 		for (var j = 0; j < finalArr[i].length; j++) {
 			sum += finalArr[i][j];
 			if (sum === target) {
 				return true;
 			}
 		}
 		sum = 0;
 	}
 	return false;
 }

module.exports = subsetSum;
