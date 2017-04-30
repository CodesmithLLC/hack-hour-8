/*  Given an array of numbers and a target number, return true if there are two numbers in the
 *  array that sum up to the target value; return false otherwise
 */

 const twoSum = (arr, n) => {
   let x = 0;
   while (x < arr.length - 1) {
     if (arr.indexOf(n - arr[x]) > -1) return true;
     x++;
   }
   return false;
 };

module.exports = twoSum;
