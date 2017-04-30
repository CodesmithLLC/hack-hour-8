/*  Given an array of numbers and a target number, return true if there are two numbers in the
 *  array that sum up to the target value; return false otherwise
 */

 function twoSum(arr, n) {
 const dup = arr;
 for (var i = 0; i < arr.length; i++){
 	for (var y = 0; y < dup.length; y++){
    if (arr[i] + dup[y] === n && i !== y) return true;
 		 if (i === arr.length-1 && y === dup.length-1) return false;
 			}
 		}
 }

module.exports = twoSum;
