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
  let numObj = {};
  for(let i = 0; i < array.length; i++){
    if(numObj[array[i]]){
      numObj[array[i]]++;
    } else {
    numObj[array[i]] = 1;
    }
  }
  for(key in numObj){
    if(numObj[key] === 1) return key;
  }
}

module.exports = uniqueNumber;
console.log(uniqueNumber([1,2,2,1,3,6,3]));
