/*  Given an array of numbers and a target number, return true if there are two numbers in the 
 *  array that sum up to the target value; return false otherwise
 */

function twoSum(arr, n) {
<<<<<<< HEAD
	var hash = {};
    
    for(var i = 0; i < arr.length; i++){
        hash[arr[i]] = i;
    }
    
    for(i = 0; i < arr.length; i++){
        var num = arr[i];
        var diff = n - num;
        if(hash[diff] !== undefined && hash[diff] !== i){
            if(hash[diff] > i){
                return [i+1, hash[diff]+1];
            } else {
                return [hash[diff]+1, i+1]
            }
        }
    }
    
    return [];
=======

>>>>>>> dd1ec374824e7f4118721b57c72e556db9cb5e75
}

module.exports = twoSum;
