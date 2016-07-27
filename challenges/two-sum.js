/*  Given an array of numbers and a target number, return true if there are two numbers in the
 *  array that sum up to the target value; return false otherwise
 */

 function twoSum(arr, n) {
   var combos = [];
   permutation(arr, []);

   function permutation(begArr,arr) {
     if (begArr.length === 0) combos.push(arr.join(',').split(','));
     for (var i = 0, l = begArr.length; i < l; i++) {
       let s = begArr.splice(i,1);
       arr.push(s);
       permutation(begArr,arr);
       arr.pop();
       begArr.splice(i,0,s);
     }
   }

   var finalArr = combos.map(function(arrToNum){
     return arrToNum.map(function(e){
       return parseInt(e);
     });
   });

   for (var i = 0; i < finalArr.length; i++) {
   	if (finalArr[i][0] + finalArr[i][1] === n) return true;
   }
   return false;
 }

module.exports = twoSum;
