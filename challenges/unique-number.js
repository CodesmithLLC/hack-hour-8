/**
 * Given an array of IDs, which contains many duplicate (there are two) integers and one unique integer,
 * find the unqiue integer.
 *
 * uniqueNumber([1,2,1,3,3]); -> 2
 *
 * BONUS:
 * Complete the challenge in O(n) time
 * Complete the challenge in O(1) space
 *
 */
function uniqueNumber(array) {
//Brute force - sort, check elem before and after each item in array, 
//if no match, return item
  // sortedArr = array.sort(function(a,b){return a-b}); 
  // for (var i = 1; i < array.length; i++){
  //   if (sortedArr[i - 1] !== sortedArr[i] && sortedArr[i + 1] !== sortedArr[i]) return sortedArr[i]; 
  // }

//Approach: push item into obj as key/value pair, if key already
//exists, delete key/value,.  return remaining item in obj

var obj = {}; 
for (var i = 0; i < array.length; i++){
  if (obj[array[i]]) {
    delete obj[array[i]]; 
  }
  else obj[parseInt(array[i])] = array[i]; 
   res = (Object.keys(obj)); 
   //console.log('res', res)
}
 return parseInt(res[0]);

}   


module.exports = uniqueNumber;
