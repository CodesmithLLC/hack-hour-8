/*  Given an array of numbers and a target number, return true if there are two numbers in the 
 *  array that sum up to the target value; return false otherwise
 */
//brute force method: O(n^2) when 2 for loops to go through the array to check every pair
function twoSumBruteForce(arr, n) {
	//return true if 2 numbers in array sum up
	for (var i = 0; i<arr.length; i++){
		for(var j = i+1; j<arr.length; j++){
			if(arr[i]+arr[j]=== n) return true;
		}
	}
	return false;
	//else return false
}

//MESSY Hash Table Implementation
function twoSum(arr, n){
	var hash = {}
	arr.forEach(function(item, i){
		//make hash table 
		hash[item] = i;
	});

	var hashArr = Object.keys(hash);
	for(var i =0; i<arr.length; i++){
		if(hashArr.indexOf(String(n-arr[i])) > -1 && hashArr.indexOf(String(n-arr[i])) !== i ){
			return true;
		}
	};
	//else return false
	return false;
}


module.exports = twoSum

