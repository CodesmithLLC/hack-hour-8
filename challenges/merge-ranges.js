/**
 * Write a function mergeRanges that takes an array of meeting time ranges and returns an array of condensed ranges.
 *
 * Example:
 * var times = [[0, 1], [3, 5], [4, 8], [10, 12], [9, 10]
 *
 * mergeRanges(times); -> [[0, 1], [3, 8], [9, 12]]
 *
 * Do not assume the ranges are in order
 */


function mergeRanges(array) {

/* Approach: set a variable beginTime to the lowest number in the input array, 
if the endTime var in that array is less than all other items in the array, push 
into resArray that 2-element nested array.  Else if another nested array has a number lower than endTime && and checkEndTime larger than endTime, push into
resArray startTime from original nestedArr and checkEndTime.  If checkEndTime is < 
endTime, push into resArr original nestedArr and splice checkedNestedArr?  I don't
like splice,  but it's useful here.  First we need to get these nested arrays in order
Let's brute force first then see if there's time to re-factor. 
No time to re-factor, production proj calls.  Also, this doesn't account for 
edge cases like [[1,7], [2,5], [3,6], [7, 10]].  

*/
let endTime = 0, sortedArr = [], pushIt, resArr = [], len = array.length;  


    while (sortedArr.length <  len){
        let startTime = 13
        for (var i = 0; i < array.length; i++){
            for (var j = 0; j < array[i].length; j++){
                if (array[i][j] < startTime){
                    startTime = array[i][j]; 
                    pushIt = array[i]; 
                    
                }
            }
        } 
    sortedArr.push(pushIt)
    for (var k = 0; k < array.length; k++){
        if (array[k] === pushIt){
            array.splice(k, 1)
        }
    }
}
    while(sortedArr.length > 0){
        if (sortedArr.length === 1) resArr.push(sortedArr.pop())
        for (var l = 1; l < sortedArr.length; l++){
        startTime = sortedArr[0][0], endTime = sortedArr[0][1]; 
        if (sortedArr[l][0] <= endTime && sortedArr[l][1] > endTime){
            resArr.push([startTime, sortedArr[l][1]]); 
            sortedArr.splice(l, 1); 
            sortedArr.splice(0, 1); 
        
        } else if (sortedArr[l][0] <= endTime && sorted[l][1] <= endTime){
            resArr.push([startTime, endTime])
            sortedArr.splice(0, 1); 
            sortedArr.splice(l, 1); 
        } else if (l === sortedArr.length - 1 && sortedArr[l][0] > startTime){
            resArr.push(sortedArr[0]); 
            sortedArr.splice(0, 1); 
        }
    }
}
    return resArr; 
}

module.exports = mergeRanges;
