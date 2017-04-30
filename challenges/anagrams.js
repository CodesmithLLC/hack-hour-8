/**
 * Given a single input string, write a function that produces all possible anagrams
 * of a string and outputs them as an array. At first, don't worry about
 * repeated strings.  What time complexity is your solution?
 *
 * Extra credit: Deduplicate your return array without using uniq().
 */

/**
  * example:
  * var result = anagrams('abc');
  * console.log(result); // [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]
  */

function anagrams(string) {
    /*Approach: by recursing in the for loop, we recurse allll the way down to the base case (arr1.length === 0)
    before getting to line 26 in the previous recursive context, popping off the resArray and splice var first in
    at the ith position.  
    */
    var final = []; 
    function perm(arr1, resArr){
        if (arr1.length === 0) return final.push(resArr.join('')); 
        for (var i = 0; i < arr1.length; i++){
            let first = arr1.splice(i, 1)[0]; 
            resArr.push(first); 
            perm(arr1, resArr); 
            resArr.pop(); 
            arr1.splice(i, 0, first); 

        }
    }
    var stringArr = string.split(''); 
    perm(stringArr, []); 
    return final; 
}

module.exports = anagrams;
