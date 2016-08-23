'use strict';
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

//O(n) solution
// function uniqueNumber(array) {

// let cache = {};

// array.forEach(function(ele,idx){
// if(!cache[ele]){ 
// cache[ele] = 1;
// }else{
// cache[ele]++;
// }
// })

// for(let k in cache){
// if(cache[k] === 1) return k;
// }
// }

//O(1)-ish solution
function uniqueNumber(array) {
  var curr,
    result;
  array.sort(function(a, b) {
    return a - b;
  }).forEach(function(ele, idx, arr) {
    // if (!curr) curr = ele;
    // console.log(ele != curr && ele != arr[idx + 1])
    if (ele != curr && ele != arr[idx + 1]) {
      // return ele;
      // console.log(ele)
      result = ele;
    } else {
      curr = ele;
    }
  });
  return result;
}


// console.log(uniqueNumber([1, 2, 1, 3, 3]))
  module.exports = uniqueNumber;
