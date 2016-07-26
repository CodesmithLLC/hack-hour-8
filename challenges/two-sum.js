/*  Given an array of numbers and a target number, return true if there are two numbers in the 
 *  array that sum up to the target value; return false otherwise
 */

function twoSum(arr, n) {
	var newarr = arr.sort(function(a,b) {
		return a-b
	})
	var target = n
	var temp;
	for(var i = 0; i < newarr.length; i++) {
		temp = i;
		
		for(var j = 0; j < newarr.length;j++) {
			var other = newarr[j]
			if(temp + other === target){
				return true
			}
		}
}
return false

}
//sort array
//arr = [3,5,1,2,7];
//[1,2,3,5,7];
//target = 6
//slower time complexity due to sorting, needs to be faster/solved recursively 
//have a pointer steady on one number and another moving down the list, adding them together and comparing to target
module.exports = twoSum;
