/*  Given an array of numbers and a target number, return true if there are two numbers in the 
 *  array that sum up to the target value; return false otherwise
 */

function twoSum(arr, n) {

  for(let i = 0; i < arr.length; i++) {
    let num1 = arr[i];

    for(let s = i + 1; s < arr.length; s++) {
      let num2 = arr[s];

      if(num1 + num2 === n) return true;
    }
  }

  return false;

}

module.exports = twoSum;
