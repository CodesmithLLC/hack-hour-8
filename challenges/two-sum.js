/*  Given an array of numbers and a target number, return true if there are two numbers in the 
 *  array that sum up to the target value; return false otherwise
 */

/*
Initial brute force approach: Apply two for loops and brute force sums for the entire array. return true if indexof match is found. 

Second approach: Check during each iteration using indexof to check for match. If a match is found break loop.
*/

function twoSum(arr, n) {
  var sum = [];
  for(var i = 0; i < arr.length-1; i++){
  	for(var k = i+1; k < arr.length; k++){
  		if (sum.indexOf(n) > -1) break;
  		sum.push(arr[i]+arr[k]);
  	}
  }
  return sum.indexOf(n) > -1 ? true: false;
}


module.exports = twoSum;
