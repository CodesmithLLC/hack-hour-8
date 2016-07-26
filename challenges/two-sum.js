/*  Given an array of numbers and a target number, return true if there are two numbers in the 
 *  array that sum up to the target value; return false otherwise
 */

function twoSum(arr, n) {
    /*
    Approach: In light of Josh's comment this morning that space is cheap, I thought I'd run through the array 
    from the front to back, back to front, 2nd half forward and end of the first half backward all within the 
    same nested loops.  Should find the answer faster (if one exists), even though it's still O(n)squared.   
    */
    let arr2ndHalf = arr.slice(Math.floor(arr.length/2)); 
    let arr1stHalf = arr.slice(0, Math.floor(arr.length/2)); 

    for (var i = 0; i < arr.length; i++){
        for (var j = 0; j < arr.length; j++){
            if (j !== i){
                //console.log('2ndHalfAdd', arr2ndHalf[i] + arr2ndHalf[j], i, j);
                //console.log('1stHalfBackWardAdd', arr1stHalf[arr1stHalf.length - (1 + i)] + arr1stHalf[arr1stHalf.length - (1 + j)], i, j);
                //console.log ('front add', arr[i] + arr[j], i, j);
                //console.log ('back add', arr[arr.length - (1 + i)] + arr[arr.length - (1+j)], i, j);
            }
            if (arr2ndHalf[i] + arr2ndHalf[j] === n && i !== j) return true; 
            if (arr1stHalf[arr1stHalf.length - (1 + i)] + arr1stHalf[arr1stHalf.length - (1 + j)] === n && i !== j) return true; 
            if (arr[i] + arr[j] === n && i !== j) return true; 
            if (arr[arr.length - (1 + i)] + arr[arr.length - (1+j)] === n && i !== j){
                return true; 
            }
        }
    }
    return false; 
}

module.exports = twoSum;
